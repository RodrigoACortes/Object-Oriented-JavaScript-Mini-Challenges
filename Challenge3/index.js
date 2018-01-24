class Person {
  constructor(name, age) {

  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
  }
}


class Teacher extends Person {
  constructor(name, age, major) {
    super(name, age);
  }
}

class School {
  constructor(students, teachers) {
    this.students = [];
    this.teachers = [];
  }
  addStudent(newStudent) {
    this.students.push(newStudent);
  }
  addTeacher(newTeacher) {
    this.teachers.push(newTeacher);
  }
}

var newSchool = new School();

var stu = new Student('hvds', 10, '4th');
var tea = new Teacher('bhd', 84, 'computer science');


newSchool.addStudent(stu);
newSchool.addTeacher(tea);
