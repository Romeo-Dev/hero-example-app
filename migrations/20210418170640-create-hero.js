'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(120)
      },
      origin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      lore: {
        type: Sequelize.TEXT
      },
      strength: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      finesse: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      constitution: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      intelligence: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      memory: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      wits: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      level: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Heros');
  }
};