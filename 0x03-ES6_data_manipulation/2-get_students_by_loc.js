export default function getStudentsByLocation(students, location) {
  return students.filter((stud) => stud.location === location);
}
