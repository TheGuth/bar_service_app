import Authentication from '../controllers/clientAuthentication';
import passport from 'passport';
import passportService from'../services/clientPassport';
import { ClientUser } from '../models/client-user-model';

const requireAuth = passport.authenticate('jwtClientLogin', { session: false });
const requireSignin = passport.authenticate('localClientLogin', { session: false });

// Client Sign in and Log out ///////////////////

module.exports = function(app) {
  app.get('/client/users', requireAuth, (req, res) => {
    ClientUser
      .find()
      .exec()
      .then(response => {
        const clientJson = response.map(user => user.apiRepr());
        res.json({clientJson});
      });
  });

app.post('/client/users', Authentication.clientSignup, (req, res) => {
  return res.status(201).json(user.apiRepr());
});

app.post('/client/login', requireSignin, Authentication.signin, (req, res) => {
    ClientUser
    .findOne({email: req.body.email})
    .exec()
    .then(user => {
      const data = {
        user: user.apiRepr(),
        token: req.token,
      };
      res.status(201).json(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Internal Server Error'});
    });
  });
};
