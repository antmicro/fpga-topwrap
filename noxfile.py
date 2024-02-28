# Copyright (c) 2023-2024 Antmicro <www.antmicro.com>
# SPDX-License-Identifier: Apache-2.0

import os
import shutil
import subprocess
import sys

import nox

PYTHON_VERSIONS = ["3.8", "3.9", "3.10", "3.11", "3.12"]


@nox.session()
def pre_commit(session: nox.Session) -> None:
    session.run("pre-commit", "install")
    session.run("pre-commit", "run", "--all-files")


@nox.session()
def isort(session: nox.Session) -> None:
    """Options are defined in pyproject.toml file"""
    session.install(".[lint]")
    session.run("isort", ".")


@nox.session()
def isort_check(session: nox.Session) -> None:
    """Options are defined in pyproject.toml file"""
    session.install(".[lint]")
    session.run("isort", "--check", ".")


@nox.session
def flake8(session):
    """Options are defined in .flake8 file."""
    session.install(".[lint]")
    session.run("flake8", ".")


@nox.session
def black(session):
    """Options are defined in pyproject.toml file"""
    session.install(".[lint]")
    session.run("black", ".")


@nox.session
def black_check(session):
    """Options are defined in pyproject.toml file"""
    session.install(".[lint]")
    session.run("black", "--check", ".")


# Coverage report generation will work only with packages installed
# in development mode. For more details, check
# https://github.com/pytest-dev/pytest-cov/issues/388


@nox.session(python=PYTHON_VERSIONS)
def tests(session: nox.Session) -> None:
    session.install("-e", ".[tests,topwrap-parse]")
    session.run("pytest", "-rs", "--cov=topwrap", "tests")


@nox.session(python=PYTHON_VERSIONS)
def tests_with_report(session: nox.Session) -> None:
    session.install("-e", ".[tests,topwrap-parse]")
    session.run("pytest", "-rs", "--cov-report", "html:cov_html", "--cov=topwrap", "tests")


def prepare_pyenv(session: nox.Session) -> dict:
    env = os.environ.copy()
    path = env.get("PATH")

    project_dir = os.path.dirname(os.path.abspath(__file__))
    env["PYENV_ROOT"] = env.get("PYENV_ROOT", f"{project_dir}/.nox/pyenv")

    pyenv_bin = f"{os.path.join(env['PYENV_ROOT'], 'bin')}"
    pyenv_shims = f"{os.path.join(env['PYENV_ROOT'], 'shims')}"
    path = f"{pyenv_bin}:{pyenv_shims}:{path}"
    env["PATH"] = path

    # Install Pyenv
    if not shutil.which("pyenv", path=path):
        session.error(
            "\n'pyenv' command not found, you can install it by executing:"
            "\n    curl https://pyenv.run | bash"
            "\nSee https://github.com/pyenv/pyenv?tab=readme-ov-file#installation for more information"
        )

    # Install required Python versions if these don't exist
    for ver in PYTHON_VERSIONS:
        if not shutil.which(f"python{ver}", path=path):
            session.log(f"Installing Python {ver}")
            p = subprocess.run(
                f"pyenv install {ver}",
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                shell=True,
                env=env,
            )
            session.log(p.stdout.strip("\n"))

    # Detect which versions are provided by Pyenv
    pythons_in_pyenv = ""
    for ver in PYTHON_VERSIONS:
        if shutil.which(f"python{ver}", path=pyenv_shims):
            pythons_in_pyenv += f"{ver} "

    # Allow using Pythons from Pyenv
    if pythons_in_pyenv:
        session.log(f"Configuring Pythons from Pyenv, versions: {pythons_in_pyenv}")
        p = subprocess.run(
            f"pyenv global {pythons_in_pyenv}",
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            shell=True,
            env=env,
        )
        session.log(p.stdout.strip("\n"))

        if p.returncode:
            session.error()

    return env


@nox.session
def tests_in_env(session: nox.Session) -> None:
    env = prepare_pyenv(session)
    session.run("nox", "-s", "tests", external=True, env=env)


@nox.session
def tests_with_reports_in_env(session: nox.Session) -> None:
    env = prepare_pyenv(session)
    session.run("nox", "-s", "tests_with_report", external=True, env=env)
