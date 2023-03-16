/*
 * Config router of student list
 * cấu hình router cho students
 */

const express = require("express");
const studentRouter = express.Router();
const {
  getStudentList,
  getStudentDetail,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../Controllers/students.controller");

const { M_getData } = require("../Middlewares/Logger/logFeature");
const {
  CheckEmpty,
  checkClassNumber,
} = require("../Middlewares/Validations/student.validation");

//* Completed: get data students
studentRouter.get("/students", M_getData, getStudentList);

//* Completed: get data detail students
studentRouter.get("/students/:id", getStudentDetail);

//* Completed: add data student
studentRouter.post("/students", CheckEmpty, checkClassNumber, addStudent);

//* Completed: update data student
studentRouter.put("/students/:id", updateStudent);

//* Completed: delete data student
studentRouter.delete("/students/:id", deleteStudent);

module.exports = studentRouter;
