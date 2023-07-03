export default function getStudentsByLocation(students, city) {
  if (typeof city !== 'string') {
    throw new TypeError('City must be a string');
  }
  if (!Array.isArray(students)) {
    throw new TypeError('Students must be an array of objects');
  }

  return students.filter((student) => student.location === city);
}
