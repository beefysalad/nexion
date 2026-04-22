#!/bin/sh
set -eu

npx prisma migrate deploy
npm run start
