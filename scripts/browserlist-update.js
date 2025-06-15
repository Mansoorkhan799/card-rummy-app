#!/usr/bin/env node

/**
 * This script updates the browserslist cache to ensure we're using
 * the most recent browser usage data for optimizing our JavaScript.
 */

const { exec } = require('child_process');

console.log('Updating browserslist database...');

exec('npx browserslist@latest --update-db', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  
  console.log(`${stdout}`);
  console.log('Browserslist database updated successfully!');
}); 