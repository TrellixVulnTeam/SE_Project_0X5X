const passport = require('passport');
const naverStrategy = require('passport-naver').Strategy;

const User = require('../models/user');

module.exports = () => {
  passport.use(new naverStrategy({
    clientID : process.env.NAVER_CLIENT,
    clientSecret : process.env.NAVER_CLIENT_SECRET,
    callbackURL: 'http://localhost:3305/auth/naver/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const exUser = await User.findOne({
        where: { name: profile.displayName, provider: 'naver' },
      });
      if (exUser) {
        done(null, exUser);
      } else {
        const newUser = await User.create({
          email: profile.emails,
          name: profile.displayName,
          provider: 'naver',
        });
        done(null, newUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    } 

  }));
};