const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING(256),
         unique: true,
         allowNull: false,
         validate: {
            isEmail: true
         }
      },
      password: {
         type: DataTypes.STRING(250),
         allowNull: false,
         
      }
   }, { timestamps: false });
};
