#!/usr/bin/env node

/* reading files async */
/* eslint-disable no-unused-vars */

const { promisify } = require('util');
const { readFile } = require('fs');

const readFileAsync = promisify(readFile);

function parseCsvLine(line) {
  return line.split(',').map((item) => item.trim());
}

function countStudents(fileName) {
  const students = {};
  const fields = {};

  return readFileAsync(fileName, 'utf-8')
    .then((data) => {
      const lines = data.trim().split('\n');
      lines.shift(); // Remove header line
      lines.forEach((line) => {
        const [firstName, , , field] = parseCsvLine(line);

        students[field] = students[field] || [];
        students[field].push(firstName);

        fields[field] = (fields[field] || 0) + 1;
      });

      const totalStudents = lines.length;
      console.log(`Number of students: ${totalStudents}`);

      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          const studentList = students[key].join(', ');
          console.log(`Number of students in ${key}: ${value}. List: ${studentList}`);
        }
      }
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
