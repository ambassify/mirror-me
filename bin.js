#!/usr/bin/env node

const { execSync } = require('child_process');

execSync('npm start', { stdio: 'inherit', cwd: __dirname });
