const express = require("express");
const app = express();
const port = 8000;
const routers = require("./Routers/router");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("student_management", "root", "taimarce99", {
  host: "localhost",
  dialect: "mysql",
});

//* ktr kết nối sequelize
const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("successfully connection");
  } catch (error) {
    console.log(error);
  }
};

//* Create model
const Task = sequelize.define(
  "Task", //* Model name
  {
    name: {
      type: DataTypes.STRING, //* khai báo type
      allowNull: false, //* Not null
    },
    status: {
      type: DataTypes.STRING,
    },
  }
);

//* đồng bộ model
const syncModel = async () => {
  //* xóa table cũ và tạo table mới
  await Task.sync({ force: true });
  console.log("sync model Task");
  //* sửa table cũ thành table mới
  // Task.sync({ alter: true });
};

const createTask = async (name, status) => {
  //* Cach 1: build + save
  // const newTask = Task.build({ name: name, status: status });
  // await newTask.save();

  //* Cach 2
  const newTask = await Task.create({
    name: name,
    status: status,
  });
};

//* get all data
const getData = async () => {
  const taskList = await Task.findAll();
  console.log(JSON.stringify(taskList, null, 2));
};

//* get detail data
const getDetailData = async (id) => {
  const task = await Task.findOne({
    where: {
      id,
    },
  });

  console.log(JSON.stringify(task, null, 2));
};

//* update task
const updateTask = async (id, name, status) => {
  await Task.update(
    {
      //* data to update
      name: name,
      status: status,
    },
    {
      //* conditional to update
      where: {
        id: id,
      },
    }
  );
};

//* delete task
const deleteTask = async (id) => {
  await Task.destroy({
    where: {
      id: id,
    },
  });
};

// checkConnect();
// syncModel();
// createTask("Nhi", "Studing");
// getData();
// getDetailData(9);
// updateTask(1, "MT.Tai", "OK");
deleteTask(1);
//* chuyển request và response => json
app.use(express.json());

//* sử dụng routers đã cấu hình
app.use(routers);

app.get("/", (req, res) => {
  //* gửi data đến clients
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server's running in port ${port}`);
});
