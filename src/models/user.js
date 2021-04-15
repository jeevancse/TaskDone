'use strict';
module.exports = (sequelize, DataTypes) => {
const User = sequelize.define(
  "User" ,
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    address: {
      type: DataTypes.STRING,
      allowNull:true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },{})
User.associate = function (models) {
  
};
return User;
};
