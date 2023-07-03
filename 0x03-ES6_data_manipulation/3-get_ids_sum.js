export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    throw new TypeError(`${students} is not a valid array`);
  }
  const studentIdArray = students.map((student) => student.id);
  return studentIdArray.reduce((accumulator, currentValue) => accumulator + currentValue);
}
