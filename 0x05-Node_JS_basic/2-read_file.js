#!/usr/bin/env node

/* a simple script to practice reading files */

const fs = require('fs');

function filterByGroup(group, dataset) {
  return dataset.filter((entry) => entry.split(',').at(-1).toString() === group);
}

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    // get rid of the first line in the csv
    const sData = data.toString().trim().split('\n');
    const fullData = sData.splice(1, data.length);
    console.log(`Number of students: ${fullData.length}`);
    const groups = new Set(fullData.map((item) => item.split(',').at(-1)));
    for (const group of groups) {
      const filteredGroup = filterByGroup(group, fullData);
      const fNames = filteredGroup.map((entry) => entry.split(',').at(0));
      console.log(`Number of students in ${group}: ${filteredGroup.length}. List: ${fNames.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
