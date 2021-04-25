'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Skill.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    index: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};