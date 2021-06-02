const Sequelize = require('sequelize');

module.exports = class Booking extends Sequelize.Model{
    static init(sequelize){

        return super.init({
            table: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            cover: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            check:{
                type: Sequelize.INTEGER,
                allowNull: true,
            }
        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName: 'Booking',
            tableName: 'booking',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){
    }
};