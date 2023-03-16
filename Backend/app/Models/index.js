const { Sequelize, DataTypes } = require("sequelize");
const { HOST, USER, PASSWORD, DB, DIALECT } = require("../Configs/db.config");
const { createStudentModel } = require("./student.model");

//* connect Sequelize and Database
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

/*
 *đồng bộ model (table) vào Database
 * force:
 * xóa table cũ và tạo table mới
 * chạy trên môi trường Dev (để tránh xóa nhầm data)
 * "await student.sync({ force: true })";
 *
 * alter:
 * sửa table cũ thành table mới
 * xét về mặt hiệu năng thì có tiện hơn force
 * thường chạy trên môi trường production
 */
sequelize.sync({ alter: true });

//* model of students
const student = createStudentModel(sequelize);

//* ktr kết nối sequelize
const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("successfully connection");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sequelize,
  student,
};
