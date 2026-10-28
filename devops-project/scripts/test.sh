#!/bin/bash
# Test script for the project

set -e

echo "🧪 Running tests..."

# Python tests
if [ -f "app/requirements.txt" ]; then
    echo "🐍 Running Python tests..."
    python -m pytest app/tests/ -v
fi

# Infrastructure tests
if [ -d "infra" ]; then
    echo "🏗️  Validating infrastructure..."
    cd infra
    terraform validate
    cd ..
fi

# Security tests
if [ -d "security" ]; then
    echo "🔒 Running security scans..."
    # Add security scanning commands here
fi

echo "✅ All tests passed!"
