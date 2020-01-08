'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    title: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    description: DataTypes.TEXT('long')
  }, {});
  Tasks.associate = function (models) {
    // associations can be defined here
  };
  return Tasks;
};