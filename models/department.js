'use strict';
import { DataTypes, Model } from "sequelize";
import sequelize from "../database/sequelize.js";

class Department extends Model { }

Department.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
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
    modelName: 'Department',
  });

export default Department;
