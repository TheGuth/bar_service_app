import jwt from 'jwt-simple';
import { BusinessUser } from '../models/business-user-model';
import { SECRET as config } from '../config';

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  req.token = tokenForUser(req.user);
  return next();
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const businessName = req.body.businessName;
  if (!email || !password || !businessName) {
    return res.status(422).send({ error: 'You must provide email, password, and Business Name'});
  }
  console.log('server');
  // See if a user with the given email exists
  BusinessUser.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new BusinessUser({
      email: email,
      password: password,
      businessName: businessName
    });

    user.save(function(err) {
      if (err) { return next(err); }

      // Repond to request indicating the user was created
      res.json({ token: tokenForUser(user), user: user });
    });
  });
};
