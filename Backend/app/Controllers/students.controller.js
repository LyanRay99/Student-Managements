/*
 * Config controllers of student list
 */

const {
  S_createTask,
  S_getData,
  S_getDataDetail,
  S_updateData,
  S_deleteData,
} = require("../Services/student.service");

//* Completed: get data students
const getStudentList = async (req, res) => {
  const dataStudentList = await S_getData();

  if (dataStudentList) {
    res.status(200).send(dataStudentList);
  } else {
    res.status(404).send("Not found");
  }
};

//* Completed: get data detail students
const getStudentDetail = async (req, res) => {
  const { id } = req.params;
  const dataStudentDetail = await S_getDataDetail(id);
  if (dataStudentDetail) {
    res.status(200).send(dataStudentDetail);
  } else {
    res.status(404).send(`ko co id ${id} trong list`);
  }
};

//* Completed: add data student
const addStudent = async (req, res) => {
  const { fullName, age, numberClass } = req.body;
  const dataStudentList = await S_createTask(fullName, age, numberClass);
  // res.status(201).send(JSON.stringify(dataStudentList, null, 2));
  res.status(201).send(dataStudentList);
};

//* Completed: update data student
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { fullName, age, numberClass } = req.body;
  const dataStudents = await S_updateData(id, fullName, age, numberClass);

  console.log(dataStudents);
  console.log(JSON.stringify(dataStudents, null, 2));
  if (dataStudents) {
    res.status(200).send(dataStudents);
  } else {
    res.status(404).send(`ko co id ${id} trong list`);
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const dataStudents = await S_deleteData(id);

  console.log(dataStudents);
  if (dataStudents) {
    res.status(200).send(`da xoa id: ${id}`);
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
