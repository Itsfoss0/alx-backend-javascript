#!/usr/bin/env node
const { promisify } = require('util');
const { readFile } = require('fs');
const { createServer } = require('http');

const readFileAsync = promisify(readFile);
const HOST = '127.0.0.1';
const PORT = 1245;

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

// countStudents('database.csv').then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })

// create a simple http server

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/text');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2]).then((data) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data.totalStudents}\n`);
      for (const [fieldName, fieldData] of Object.entries(data.fields)) {
        res.write(`Number of students in ${fieldName}: ${fieldData.numberOfStudents}. List: ${fieldData.studentList}\n`);
      }

      res.end('');
    })
      .catch((err) => {
        res.statusCode = 404;
        res.end(err);
      });
  }
});

app.listen(PORT, HOST, () => {});
