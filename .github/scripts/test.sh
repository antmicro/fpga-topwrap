#!/bin/bash

set -e

ROOT_DIR="$(dirname "${BASH_SOURCE[0]}")/../.."
EXAMPLES=(hdmi inout pwm)

begin_command_group() {
	if [[ -n "${GITHUB_WORKFLOW:-}" ]]; then
		echo "::group::$*"
	else
		echo -e "\n\033[1;92mRunning step: $1\033[0m\n"
	fi
}

end_command_group() {
	if [[ -n "${GITHUB_WORKFLOW:-}" ]]; then
		echo "::endgroup::"
	fi
}

install_system_packages() {
    begin_command_group "Install system packages"
    apt-get update -qq
    apt-get install -y --no-install-recommends \
        git \
        python3-pip \
        python3-venv

    if [[ "$1" == "examples" ]]; then
        apt-get install -y --no-install-recommends \
            python3-dev
    fi

    if [[ "$1" == "tests" ]]; then
        apt-get install -y --no-install-recommends \
            curl \
            wget \
            python3-dev \
            make \
            meson \
            ninja-build \
            gcc-riscv64-unknown-elf \
            bsdextrautils \
            verilator \
            libssl-dev \
            libreadline-dev \
            libffi-dev \
            libbz2-dev \
            libncurses-dev \
            libsqlite3-dev \
            liblzma-dev
    fi
    end_command_group
}

install_pyenv() {
    begin_command_group "Install pyenv"
    export PYENV_ROOT="$HOME/.pyenv"
    export PATH="$PYENV_ROOT/bin:$PATH"
    curl https://pyenv.run | bash
    end_command_group
}

enter_venv() {
    begin_command_group "Configure Python virtual environment"
    if [[ -z "$VIRTUAL_ENV" ]]; then
        python3 -m venv venv
    fi
    source venv/bin/activate
    end_command_group
}

install_python_packages() {
    begin_command_group "Install Python packages"
    if [[ "$1" == "lint" || "$1" == "tests" ]]; then
        pip install ".[$1]"
    fi

    if [[ "$1" == "tests" || "$1" == "examples" ]]; then
        pip install git+https://github.com/antmicro/tuttest
    fi
    end_command_group
}

install_topwrap() {
    begin_command_group "Install Topwrap"
    tuttest README.md | bash -
    end_command_group
}

run_lint() {
    install_system_packages
    enter_venv
    install_python_packages "lint"

    begin_command_group "Run lint checks"
    nox -s isort_check black_check flake8
    end_command_group
}

run_tests() {
    install_system_packages "tests"
    install_pyenv
    enter_venv
    install_python_packages "tests"
    install_topwrap

    begin_command_group "Run Python tests"
    nox -s tests_with_reports_in_env
    end_command_group
}

generate_examples() {
    install_system_packages "examples"
    enter_venv
    install_python_packages "examples"
    install_topwrap

    for EXAMPLE in "${EXAMPLES[@]}"; do
        begin_command_group "Generate $EXAMPLE example"
        pushd "$ROOT_DIR"/examples/"$EXAMPLE"
        tuttest README.md install-deps,generate | bash -
        popd
        end_command_group
    done
}

case "$1" in
    lint)
        run_lint
    ;;
    tests)
        run_tests
    ;;
    examples)
        generate_examples
    ;;
    *)
        echo "Usage: $0 {lint|tests|examples}"
    ;;
esac
