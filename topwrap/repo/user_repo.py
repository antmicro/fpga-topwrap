# Copyright (c) 2024 Antmicro <www.antmicro.com>
# SPDX-License-Identifier: Apache-2.0

import logging
import logging.config
import os
from dataclasses import dataclass
from pathlib import Path
from typing import List, Optional, Set

from typing_extensions import override

from topwrap.repo.files import File, LocalFile
from topwrap.repo.repo import Repo
from topwrap.repo.resource import Resource, ResourceHandler

logger = logging.getLogger(__name__)


# Resources


@dataclass
class Core(Resource):
    """Represents a hardware core resource"""

    name: str
    design: File
    files: List[File]


class CoreHandler(ResourceHandler[Core]):
    """Class that can operate on Core resources"""

    resource_type = Core
    _cores_rel_dir = Path("cores")
    _srcs_dir_name = "srcs"

    @override
    def save(self, res: Core, repo_path: Path) -> None:
        """Handles a core-specific save action"""

        core_dir = repo_path / self._cores_rel_dir / res.name
        yaml_dir = core_dir
        srcs_dir = core_dir / self._srcs_dir_name

        logger.info(f"CoreHandler.save: Saving {res.name} in {core_dir}")
        srcs_dir.mkdir(parents=True, exist_ok=True)

        for f in res.files:
            core_output_path = srcs_dir / f.path.name
            f.copy(core_output_path)
            logger.debug(f"CoreHandler.save: Copied {f.path} to {core_output_path}")

        design_output_path = yaml_dir / f"{res.name}.yaml"
        res.design.copy(design_output_path)
        logger.debug(f"CoreHandler.save: Copied {res.design.path} to {design_output_path}")

    @override
    def load(self, repo_path: Path) -> List[Core]:
        """Handles a core-specific load action"""

        cores_dir = repo_path / self._cores_rel_dir

        found_core_dirs = [Path(f.path) for f in os.scandir(cores_dir) if f.is_dir()]

        cores = []
        for core_dir in found_core_dirs:
            logger.debug(f"CoreHandler.load: Analyzing {core_dir} as core directory")
            src_dir = core_dir / self._srcs_dir_name

            src_files = list(src_dir.glob("*"))
            for src in src_files:
                logger.info(f"CoreHandler.load: Loaded {src} as core sources")

            yaml_files = []
            for ext in ["*.yml", "*.yaml"]:
                for f in core_dir.glob(ext):
                    yaml_files.append(f)
            logger.debug(f"Found {len(yaml_files)} files in {core_dir}")

            if len(yaml_files) > 1:
                raise FileExistsError("There should be only one design file in a core directory")

            [yaml_file] = yaml_files
            logger.info(f"CoreHandler.load: Loaded {yaml_file} as a core yaml")

            core_name = yaml_file.stem
            core = Core(core_name, LocalFile(yaml_file), [LocalFile(x) for x in src_files])
            cores.append(core)

        return cores


@dataclass
class InterfaceDescription(Resource):
    """Represents an interface description resource"""

    name: str
    file: File


class InterfaceDescriptionHandler(ResourceHandler[InterfaceDescription]):
    """Class that can operate on InterfaceDescription resources"""

    resource_type = InterfaceDescription
    _ifaces_rel_dir = Path("interfaces")

    @override
    def save(self, res: InterfaceDescription, repo_path: Path) -> None:
        """Handles interface-specific save action"""
        ifaces_dir = repo_path / self._ifaces_rel_dir
        ifaces_dir.mkdir(parents=True, exist_ok=True)

        logger.info(f"InterfaceDescriptionHandler.save: Saving {res.name} in {ifaces_dir}")
        output_path = ifaces_dir / res.file.path.name
        res.file.copy(output_path)
        logger.debug(f"InterfaceDescriptionHandler.save: Copied {res.name} to {output_path}")

    @override
    def load(self, repo_path: Path) -> List[InterfaceDescription]:
        """Handles interface-specific load action"""
        ifaces_dir = repo_path / self._ifaces_rel_dir

        yaml_files = []
        for ext in ["*.yml", "*.yaml"]:
            for f in ifaces_dir.glob(ext):
                yaml_files.append(f)
        logger.debug(
            f"InterfaceDescriptionHandler.load: Found {len(yaml_files)} files in {ifaces_dir}"
        )

        ifaces = []
        for yaml_file in yaml_files:
            iface_name = yaml_file.stem
            iface = InterfaceDescription(iface_name, LocalFile(yaml_file))
            ifaces.append(iface)

        return ifaces


class UserRepo(Repo):
    def __init__(self):
        resource_handlers = [
            CoreHandler(),
            InterfaceDescriptionHandler(),
        ]
        super().__init__(resource_handlers)

    def load_repositories_from_paths(self, repositories_paths: List[Path]) -> None:
        """Loads all repositories from specified paths"""
        for repository_path in repositories_paths:
            self.load(repository_path)

    @staticmethod
    def get_interfaces_directory(repository_path: Path) -> Optional[Path]:
        interfaces_directory = repository_path / InterfaceDescriptionHandler._ifaces_rel_dir
        if interfaces_directory.exists():
            return interfaces_directory
        else:
            return None

    def get_core_designs(self) -> List[Path]:
        """Get list of yaml core paths from UserRepo resources"""
        return [core.design.path for core in self.get_resources(Core)]

    def get_srcs_dirs_for_cores(self) -> List[Path]:
        """Gets all the paths of core src directories"""
        dir_paths: Set[Path] = set()
        for resource in self.get_resources(Core):
            for file in resource.files:
                dir_paths.add(Path(file.path.parent).expanduser())
        return list(dir_paths)

    def get_core_by_name(self, name: str) -> Optional[Core]:
        return next((c for c in self.get_resources(Core) if c.name == name), None)
