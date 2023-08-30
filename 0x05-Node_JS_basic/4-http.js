#!/usr/bin/env node

/* a simple http server */

const { createServer } = require('http');

const PORT = 1245;
const HOST = '127.0.0.1';

const app = createServer((req, resp) => {
  resp.setHeader('Content-Type', 'text/plain');
  resp.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  console.log(`Listening on port ${PORT}`);
});

module.export = app;
