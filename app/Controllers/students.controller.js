/*
 * Config controllers of student list
 */

const {
  S_getStudentList,
  S_getStudentDetail,
  S_addStudent,
  S_updateStudent,
  S_deleteStudent,
} = require("../Services/student.service");

//* Completed: get data students
const getStudentList = (req, res) => {
  const dataStudentList = S_getStudentList();
  if (dataStudentList) {
    res.status(200).send(dataStudentList);
  } else {
    res.status(404).send("Not found");
  }
};

//* Completed: get data detail students
const getStudentDetail = (req, res) => {
  const { id } = req.params;
  const dataStudentDetail = S_getStudentDetail(id);
  if (dataStudentDetail) {
    res.status(200).send(dataStudentDetail);
  } else {
    res.status(404).send(`ko co id ${id} trong list`);
  }
};

//* Completed: add data student
const addStudent = (req, res) => {
  const { fullName, age, classNumber } = req.body;

  //* check điều kiện nếu ok => truyền parameter vào service để thực hiện thêm
  const dataStudentList = S_addStudent(fullName, age, classNumber);

  console.log(dataStudentList);
  res.status(201).send(dataStudentList);
};

//* Completed: update data student
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { fullName, age, classNumber } = req.body;
  const dataStudents = S_updateStudent(id, fullName, age, classNumber);

  if (dataStudents) {
    res.status(200).send(dataStudents);
  } else {
    res.status(404).send(`ko co id ${id} trong list`);
  }
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  const dataStudents = S_deleteStudent(id);

  if (dataStudents) {
    res.status(200).send(dataStudents);
  } else {
    res.status(404).send(`ko co id ${id} trong list`);
  }
};

module.exports = {
  getStudentList,
  getStudentDetail,
  addStudent,
  updateStudent,
  deleteStudent,
};
