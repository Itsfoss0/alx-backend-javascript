#!/usr/bin/env node

/* a simple http server */

const { createServer } = require('http');

const PORT = 1245;

const app = createServer((req, resp) => {
  resp.writeHead(200, { 'Content-Type': 'text/plain' });
  resp.end('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
