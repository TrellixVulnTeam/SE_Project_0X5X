const Sequelize = require('sequelize');

module.exports = class Restaurant extends Sequelize.Model{
    static init(sequelize){

        return super.init({
            date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            revenue: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        },{
            sequelize,
            timestamps:true,
            underscored:false,
            modelName: 'Restaurant',
            tableName: 'restaurant',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){}
};