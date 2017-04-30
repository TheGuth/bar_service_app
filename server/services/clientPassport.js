import { SECRET as config } from '../config';
const passport = require('passport');
const { ClientUser } = require('../models/client-user-model');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };
const localClientLogin = new LocalStrategy(localOptions, function(email, password, done) {
  ClientUser.findOne({ email: email }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }

    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }

      return done(null, user);
    })
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};


const jwtClientLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    console.log(payload);
    ClientUser.findById(payload.sub, function(err, user) {
      console.log(user);
      if (err) { return done(err, false); }

      if (user) {
        console.log('2', user);
        done(null, user);
      } else {
        done(null, false);
      }
  })
});

passport.use('jwtClientLogin', jwtClientLogin);
passport.use('localClientLogin', localClientLogin);
