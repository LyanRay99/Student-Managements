/*
 * Config services of student list
 */

//* create data
var studentList = [
  {
    id: "1",
    fullName: "Tai",
    age: 18,
    classNumber: 12,
  },
  {
    id: "2",
    fullName: "Nhi",
    age: 17,
    classNumber: 11,
  },
];

const S_getStudentList = () => {
  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};

const S_getStudentDetail = (id) => {
  const index = studentList.findIndex((item) => item.id == id);

  if (index !== -1) {
    console.log(studentList[index]);
    return studentList[index];
  } else {
    return false;
  }
};

const S_addStudent = (fullName, age, classNumber) => {
  const obj = {
    id: new Date().toISOString(),
    fullName,
    age,
    classNumber,
  };

  return (studentList = [...studentList, obj]);
};

const S_updateStudent = (id, fullName, age, classNumber) => {
  const index = studentList.findIndex((item) => item.id === id);

  if (index !== -1) {
    let studentObj = studentList[index];

    studentObj = { ...studentObj, fullName, age, classNumber };

    studentList = studentList.map((item) => {
      if (item.id === id) {
        item = studentObj;
      }

      return item;
    });

    return studentList;
  } else {
    return false;
  }
};

const S_deleteStudent = (id) => {
  // const student = studentList.find((student) => student.id == id);
  const index = studentList.findIndex((item) => item.id === id);

  if (index !== -1) {
    studentList = studentList.filter((student) => student.id !== id);

    return studentList;
  } else {
    return false;
  }
};

module.exports = {
  S_getStudentList,
  S_getStudentDetail,
  S_addStudent,
  S_updateStudent,
  S_deleteStudent,
};
