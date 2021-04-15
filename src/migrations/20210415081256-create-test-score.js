'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TestScores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        unique:true,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      firstRoundMask:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      secondRoundMask:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      thirdRoundMask:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TestScores');
  }
};