'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("students",[{
      fullname:"jacob",
      year:5,
      email:'she@gmail.com',
      paassword: "12345",
      gender:"male",
      createdAt: new Date(),
      updatedAt: new Date()

    }]);
  },

 down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students',null,{});
  }
};
