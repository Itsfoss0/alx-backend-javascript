#!/usr/bin/env node

/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

const { promisify } = require('util');
const { readFile } = require('fs');
const express = require('express');

const PORT = 1245;
const HOST = '127.0.0.1';
const app = express();
const readFileAsync = promisify(readFile);

function parseCsvLine(line) {
  return line.split(',').map((item) => item.trim());
}

async function countStudents(fileName) {
  const students = {};
  const fields = {};

  try {
    const data = await readFileAsync(fileName, 'utf-8');
    const lines = data.trim().split('\n');
    lines.shift(); // Remove header line
    lines.forEach((line) => {
      const [firstName, , , field] = parseCsvLine(line);

      students[field] = students[field] || [];
      students[field].push(firstName);

      fields[field] = (fields[field] || 0) + 1;
    });

    const totalStudents = lines.length;
    const results = {
      totalStudents,
      fields: {},
    };

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        results.fields[key] = {
          numberOfStudents: value,
          studentList: students[key].join(', '),
        };
      }
    }

    return results;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.setHeader('X-Served-By', 'itsfoss');
  resp.send('Hello Holberton School!');
});

app.get('/students', (req, resp) => {
  countStudents(process.argv[2]).then((data) => {
    resp.write('This is the list of our students\n');
    resp.write(`Number of students: ${data.totalStudents}\n`);
    for (const [fieldName, fieldData] of Object.entries(data.fields)) {
      resp.write(`Number of students in ${fieldName}: ${fieldData.numberOfStudents}. List: ${fieldData.studentList}\n`);
    }

    resp.end();
  })
    .catch((error) => {
      resp.statusCode = 404;
      resp.write('This is the list of our students\n');
      resp.end('Cannot load the database\n');
    });
});
app.listen(PORT, HOST, () => {});

module.exports = app;
