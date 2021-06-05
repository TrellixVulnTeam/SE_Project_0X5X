const passport = require('passport');
const facebookStrategy  = require('passport-facebook').Strategy;

const User = require('../models/user');

module.exports = () => {
  passport.use(new facebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: 'http://localhost:3305/auth/facebook/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const exUser = await User.findOne({
        where: { name: profile.displayName, provider: 'facebook' },
      });
      if (exUser) {
        done(null, exUser);
      } else {
        const newUser = await User.create({
          email:email,
          name: profile.displayName,
          provider: 'facebook',
        });
        done(null, newUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    } 
  }));
};