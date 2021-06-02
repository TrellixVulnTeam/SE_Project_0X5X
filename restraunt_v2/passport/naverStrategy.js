const passport = require('passport');
const naverStrategy = require('passport-naver').Strategy;

const User = require('../models/user');

module.exports = () => {
  passport.use(new naverStrategy({
    clientID: process.env.NAVER_CLIENT,
    clientSecret: process.env.NAVER_CLIENT_SECRET,
    callbackURL: 'http://localhost:3005/auth/naver/callback',
  }, async (accessToken, refreshToken, profile, done) => {

  }));
};