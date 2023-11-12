import { DataTypes, Model } from "sequelize";
import sequelize from "../database/sequelize.js";

class Student extends Model { }

Student.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
},
  {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });

export default Student;
