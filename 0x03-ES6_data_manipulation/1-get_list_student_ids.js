/* eslint-disable no-array-constructor */

export default function getListStudents(studentArray) {
  if (!Array.isArray(studentArray)) {
    return new Array();
  }

  return studentArray.map((student) => student.id);
}
