/*
 * Config services of student list
 */

const { student } = require("../Models/index");

//* add data
const S_createTask = async (name, age, classNumber) => {
  //* Cach 1: build + save
  // const newTask = StudentList.build({
  //   name: name,
  //   age: age,
  //   classNumber: classNumber,
  // });
  // await newTask.save();

  //* Cach 2
  const newStudent = await student.create({
    name: name,
    age: age,
    classNumber: classNumber,
  });

  return newStudent;
};

//* get all data
const S_getData = async () => await student.findAll();

const S_getDataDetail = async (id) => {
  const checkID = await student.findOne({ where: { id } });

  if (checkID) {
    return await student.findOne({
      where: {
        id,
      },
    });
  } else {
    return false;
  }
};

const S_updateData = async (id, name, age, classNumber) => {
  const checkID = await student.findOne({ where: { id } });

  if (checkID) {
    return await student.update(
      {
        name: name,
        age: age,
        classNumber: classNumber,
      },
      {
        where: {
          id: id,
        },
      }
    );
  } else {
    return false;
  }
};

const S_deleteData = async (id) =>
  await student.destroy({
    where: {
      id: id,
    },
  });

module.exports = {
  S_createTask,
  S_getData,
  S_getDataDetail,
  S_updateData,
  S_deleteData,
};
