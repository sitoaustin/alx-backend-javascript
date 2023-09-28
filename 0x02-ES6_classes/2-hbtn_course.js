export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    } else if (typeof students !== 'object') {
      throw new Error('Students must be an arrays of Strings');
    }
    students.forEach((student)=>{
        if(typeof student !== "string") throw new Error("Student must be a string")
    })
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
