const Sequelize = require('sequelize');

module.exports = class Booking extends Sequelize.Model{
    static init(sequelize){

        return super.init({
            number: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            reserve_time: {
                type: Sequelize.INTEGER,
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