#!/usr/bin/env node
const http = require('http');
const { readFile } = require('fs/promises'); // Using promises-based fs module

const hostname = '127.0.0.1';
const port = 1245;

async function readStudentsData(fileName) {
  const data = await readFile(fileName, 'utf-8');
  return data.trim().split('\n').slice(1); // Skip header line
}

function parseCsvLine(line) {
  return line.split(',').map((item) => item.trim());
}

function countStudents(dataLines) {
  const students = {};
  const fields = {};

  dataLines.forEach((line) => {
    const [, firstName, , , field] = parseCsvLine(line); // Skip second element
    students[field] = students[field] || [];
    students[field].push(firstName);
    fields[field] = (fields[field] || 0) + 1;
  });

  return { students, fields };
}

function generateResponse(data) {
  let response = `Number of students: ${data.totalStudents}\n`;
  for (const [field, info] of Object.entries(data.fields)) {
    response += `Number of students in ${field}: ${info.numberOfStudents}. List: ${info.studentList}\n`;
  }
  return response;
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    try {
      const dataLines = await readStudentsData(process.argv[2].toString());
      const { students, fields } = countStudents(dataLines);

      const data = {
        totalStudents: dataLines.length,
        fields: {},
      };

      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          data.fields[key] = {
            numberOfStudents: value,
            studentList: students[key].join(', '),
          };
        }
      }

      const response = generateResponse(data);
      res.end(response);
    } catch (error) {
      res.statusCode = 404;
      res.end('Cannot load the database');
    }
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
