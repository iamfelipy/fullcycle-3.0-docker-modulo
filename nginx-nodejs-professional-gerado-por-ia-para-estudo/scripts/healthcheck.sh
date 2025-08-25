#!/bin/bash
# healthcheck.sh - Health check script

set -e

# Check if Node.js app is responding
curl -f http://localhost:3000/health || exit 1

# Check if database is accessible
mysql -h db -u root -proot -e "SELECT 1;" || exit 1

echo "Health check passed"
exit 0
