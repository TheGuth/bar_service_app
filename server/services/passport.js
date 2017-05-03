import { SECRET as config } from '../config';
const passport = require('passport');
const { BusinessUser } = require('../models/business-user-model');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  BusinessUser.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false) ;}

      user.comparePassword(password, function(err, isMatch) {
        if (err) { return done(err); }
        if (!isMatch) { return done(null, false); }

        return done(null, user);
      });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  BusinessUser.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use('jwtLoginBusiness', jwtLogin);
passport.use('localLoginBusiness', localLogin);
