/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */

export default function updateStudentGradeByCity(studArray, city, newGrades) {
  if (!Array.isArray(studArray)) {
    throw new TypeError(`${studArray} is not a valid student array`);
  }
  if (typeof city !== 'string') {
    throw new TypeError(`${city} is not a valid city name`);
  }
  if (!Array.isArray(newGrades)) {
    throw new TypeError(`${newGrades} is not a valid grades array`);
  }

  const cityStuds = studArray.filter((student) => student.location === city);
  return cityStuds.map((student) => {
    for (const gradesData of newGrades) {
      if (!student.hasOwnProperty('grade')) {
        student.grade = 'N/A';
      }
      if (gradesData.studentId === student.id) {
        student.grade = gradesData.grade;
      }
    }
    return student;
  });
}
