#!/usr/bin/env node

/* a simple http server */
/* eslint-disable no-param-reassign */

const { createServer } = require('http');

const PORT = 1245;
const HOST = '127.0.0.1';

const app = createServer((req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {});

module.exports = app;
