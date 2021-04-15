'use strict';
module.exports = (sequelize, DataTypes) => {
const TestScore = sequelize.define(
  "TestScore" ,
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
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
      type:DataTypes.INTEGER,
      allowNull:false
    },
    secondRoundMask:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    thirdRoundMask:{
      type:DataTypes.INTEGER,
      allowNull:false
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
  TestScore.associate = function (models) {
    TestScore.belongsTo(models.User,
      {
       foreignKey: 'userId',
       targetKey: 'id',
       as:'user'
     });
  };
return TestScore;
};
