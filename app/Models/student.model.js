const { DataTypes } = require("sequelize");

//* Create model (table)
const createStudentModel = (sequelize) => {
  const student = sequelize.define(
    "students", //* Model name (table)
    {
      name: {
        type: DataTypes.STRING, //* khai báo type
        allowNull: false, //* Not null
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      classNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // tableName: "students", //* ta có thể đặt tên table ở đây
      timestamps: true,
    }
  );

  return student;
};

module.exports = {
  createStudentModel,
};
