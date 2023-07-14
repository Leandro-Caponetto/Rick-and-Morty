const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id_favorite :{
         type: DataTypes.INTEGER,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING(250),
         allowNull:false
      },
      image: {
         type: DataTypes.STRING,
          validate: {
             isUrl: true
         }
       },
       status: {
         type: DataTypes.STRING,
         
       },
       origin: {
         type: DataTypes.STRING,
        
       },
       species: {
         type: DataTypes.STRING,
        
       },
       gender: {
         type: DataTypes.STRING,
         validate:{
            isIn: [['Male', 'Female', 'unknown', 'Genderless']],
         } // ENUM [['Male', 'Female', 'unknown', 'Genderless']]
       }

   }, { timestamps: false });
};
