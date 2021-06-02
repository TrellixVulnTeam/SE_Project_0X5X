const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Food = require('./food');
const Booking = require('./booking');
const Restaurant = require('./restaurant');

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Food = Food;
db.Booking = Booking;
db.Restaurant = Restaurant;

User.init(sequelize);
Food.init(sequelize);
Booking.init(sequelize);
Restaurant.init(sequelize);


module.exports = db;