# Architecture Documentation

## Project Overview
devops-project - A DevOps-enabled project with modern infrastructure and deployment practices.

## Components

### Application
- **Framework**: Python application
- **Structure**: Modular architecture in `app/` directory

### CI/CD
- **Platform**: github-actions
- **Pipeline**: Automated testing and deployment
- **Location**: `ci/github-actions/`

### Infrastructure
- **Type**: aws-vpc-eks
- **Provider**: aws
- **Location**: `infra/aws-vpc-eks/`

### Deployment
- **Strategy**: rolling
- **Environments**: single
- **Location**: `deploy/rolling/`

### Observability
- **Level**: prometheus-grafana
- **Monitoring**: Enabled

### Security
- **Framework**: nist-csf
- **Compliance**: Enabled

## Data Flow
1. Code commits trigger CI/CD pipeline
2. Automated tests validate changes
3. Infrastructure is provisioned/updated
4. Application is deployed to target environment
5. Monitoring and logging collect operational data

## Technology Stack
- **Language**: Python
- **Containerization**: Docker
- **Infrastructure as Code**: Terraform
- **CI/CD**: github-actions
- **Orchestration**: Kubernetes (if applicable)
