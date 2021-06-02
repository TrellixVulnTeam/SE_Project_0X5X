const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){

        return super.init({
            email: {
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true,
              },
            password:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            name:{
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            phoneNumber:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            provider: {
                type:Sequelize.STRING(10),
                allowNull:false,
                defaultValue: 'local'
            }
        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName: 'User',
            tableName: 'user',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){
       
    }
};