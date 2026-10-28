#!/bin/bash
# Setup script for devops-project

set -e

echo "🚀 Setting up devops-project..."

# Install dependencies
if [ -f "app/requirements.txt" ]; then
    echo "📦 Installing Python dependencies..."
    pip install -r app/requirements.txt
fi

# Setup infrastructure
if [ -d "infra" ]; then
    echo "🏗️  Setting up infrastructure..."
    cd infra
    terraform init
    terraform plan
    cd ..
fi

echo "✅ Setup completed successfully!"
