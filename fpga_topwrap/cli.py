# Copyright (C) 2021 Antmicro
# SPDX-License-Identifier: Apache-2.0
import click
from .design import build_design
from .config import config


click_dir = click.Path(exists=True, file_okay=False, dir_okay=True,
                       readable=True)
click_file = click.Path(exists=True, file_okay=True, dir_okay=False,
                        readable=True)


@click.command()
@click.option('--sources', '-s', type=click_dir,
              help='Specify directory to scan for additional sources')
@click.option('--design', '-d', type=click_file, required=True,
              help='Specify top design file')
@click.option('--iface-compliance/--no-iface-compliance', default=False,
              help='Force compliance checks for predefined interfaces')
def main(sources, design, iface_compliance):

    config.force_interface_compliance = iface_compliance
    build_design(design, sources)
