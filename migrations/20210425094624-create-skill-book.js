'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('skill_books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      skillID: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'skills',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull:false
      },
      index_to_skill_book: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      description: {
        type: Sequelize.STRING
      },
      action_point: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue: 1
      },
      source_point: {
        type: Sequelize.INTEGER,
        allowNull:false,
        defaultValue: 0
      },
      resistance: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('skill_books');
  }
};