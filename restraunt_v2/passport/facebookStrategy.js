const passport = require('passport');
const facebookStrategy  = require('passport-facebook').Strategy;

const User = require('../models/user');

module.exports = () => {
  passport.use(new facebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: 'http://localhost:3005/auth/facebook/callback',
  }, async (accessToken, refreshToken, profile, done) => {

  }));
};