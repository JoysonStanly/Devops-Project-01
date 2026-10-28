#!/bin/bash
# Deployment script for devops-project

set -e

ENVIRONMENT=${1:-development}

echo "🚀 Deploying devops-project to $ENVIRONMENT..."

# Run tests
echo "🧪 Running tests..."
./scripts/test.sh

# Deploy based on strategy
case "rolling" in
    "serverless-lambda")
        echo "Deploying serverless stack..."
        ;;
    "blue-green"|"canary"|"rolling"|"gitops-argocd"|"helm-charts"|"kustomize")
        echo "Deploying to Kubernetes..."
        kubectl apply -f deploy/
        ;;
    *)
        echo "Running deployment..."
        ;;
esac

echo "✅ Deployment completed!"
