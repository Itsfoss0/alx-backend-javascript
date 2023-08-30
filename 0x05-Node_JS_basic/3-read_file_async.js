#!/usr/bin/env node

const fs = require('fs/promises');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const sData = data.trim().split('\n');
    const fullData = sData.slice(1);
    console.log(`Number of students: ${fullData.length}`);

    const groupMap = {};

    for (const entry of fullData) {
      const [firstName, , , group] = entry.split(',');
      if (!groupMap[group]) {
        groupMap[group] = [];
      }
      groupMap[group].push(firstName);
    }

    for (const [group, studentsInGroup] of Object.entries(groupMap)) {
      console.log(`Number of students in ${group}: ${studentsInGroup.length}. List: ${studentsInGroup.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
