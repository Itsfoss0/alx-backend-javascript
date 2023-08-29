#!/usr/bin/env node

/* a simple ad hoc script to practice nodejs */

const WELCOME_MESSAGE_STUB = 'Welcome to Holberton School, what is your name?\n';

function school(message, callback) {
  process.stdout.write(message);
  process.stdin.on('data', (data) => {
    callback(data);
  });
}

function closingCallBack(data) {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
}

function noClosingCallBack(data) {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
}

if (process.stdin.isTTY) {
  school(WELCOME_MESSAGE_STUB, noClosingCallBack);
} else {
  school(WELCOME_MESSAGE_STUB, closingCallBack);
}
