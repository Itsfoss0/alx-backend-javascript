/* eslint-disable no-array-constructor */

export default function getListStudents() {
  const studentOne = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const studentTwo = { id: 2, firstName: 'James', location: 'Columbia' };
  const studentThree = { id: 5, firstName: 'Serena', location: 'San Francisco' };

  return new Array(studentOne, studentTwo, studentThree);
}
