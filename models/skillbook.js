'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SkillBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SkillBook.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    index_to_skill_book: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    description: DataTypes.STRING,
    action_point: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:1
    },
    source_point: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    },
    resistance: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    },
    skillID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'SkillBook',
  });
  return SkillBook;
};