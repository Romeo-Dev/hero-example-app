'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Hero.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    lore: DataTypes.TEXT,
    strength: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10
    },
    finesse: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10
    },
    constitution: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10
    },
    intelligence: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10
    },
    memory: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10
    },
    wits: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10
    },
    level: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:1
    }
  }, {
    sequelize,
    modelName: 'Hero',
  });
  return Hero;
};