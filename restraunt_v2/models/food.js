const Sequelize = require('sequelize');

module.exports = class Food extends Sequelize.Model{
    static init(sequelize){

        return super.init({
            name: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            rate: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName: 'Food',
            tableName: 'food',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){}
};