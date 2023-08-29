#!/usr/bin/env node

/* a simple ad hoc script to practice nodejs */

const WELCOME_MESSAGE_STUB = 'Welcome to Holberton School, what is your name?';

function school(message, callback) {
  console.log(message);
  process.stdin.on('data', (data) => {
    callback(data);
  });
}

function closingCallBack(data) {
  console.log(`Your name is: ${data}`);
  console.log('This important software is now closing');
  process.exit();
}

function noClosingCallBack(data) {
  console.log(`Your name is: ${data}`);
  process.exit();
}

if (process.stdin.isTTY) {
  school(WELCOME_MESSAGE_STUB, noClosingCallBack);
} else {
  school(WELCOME_MESSAGE_STUB, closingCallBack);
}
