/*
 * Config services of student list
 */

const { student } = require("../Models/index");

//* add data
const S_createTask = async (fullName, age, numberClass) => {
  //* Cach 1: build + save
  // const newTask = StudentList.build({
  //   name: name,
  //   age: age,
  //   classNumber: classNumber,
  // });
  // await newTask.save();

  //* Cach 2
  const newStudent = await student.create({
    fullName: fullName,
    age: age,
    numberClass: numberClass,
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

const S_updateData = async (id, fullName, age, numberClass) => {
  const checkID = await student.findOne({ where: { id } });

  if (checkID) {
    return await student.update(
      {
        fullName: fullName,
        age: age,
        numberClass: numberClass,
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

const S_deleteData = async (id) => {
  const checkID = await student.findOne({ where: { id } });
  if (checkID) {
    return await student.destroy({
      where: {
        id: id,
      },
    });
  } else {
    return false;
  }
};

module.exports = {
  S_createTask,
  S_getData,
  S_getDataDetail,
  S_updateData,
  S_deleteData,
};
