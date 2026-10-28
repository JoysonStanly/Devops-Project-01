ARG BASE_IMAGE=mcr.microsoft.com/devcontainers/python:1-3.11-bullseye
FROM ${BASE_IMAGE}

USER root
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl wget git make jq unzip ca-certificates gnupg \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin

USER vscode
WORKDIR /workspace
