#!/usr/bin/env node

/* eslint-disable no-param-reassign */
const express = require('express');

const PORT = 1245;
const HOST = '127.0.0.1';
const app = express();

app.get('/', (req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.setHeader('X-Served-By', 'itsfoss');
  resp.send('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {});

module.exports = app;
