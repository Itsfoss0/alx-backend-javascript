#!/usr/bin/env node

function displayMessage(msg) {
  process.stdout.write(`${msg}\n`);
}

module.exports = displayMessage;
