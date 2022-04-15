'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      Todo.belongsTo(models.User)
    }
  }
  Todo.init({
    name: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};