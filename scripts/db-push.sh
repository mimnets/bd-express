#!/bin/bash
# Push Prisma schema to Supabase
# Usage: bash scripts/db-push.sh
# This script is designed to run in CI/CD (GitHub Actions) where
# the runner has proper IPv4/IPv6 connectivity to Supabase.

set -e

echo "Pushing Prisma schema to database..."
cd packages/database
npx prisma db push --skip-generate
echo "Generating Prisma client..."
npx prisma generate
echo "Running seed..."
npx tsx src/seed.ts
echo "Done!"
