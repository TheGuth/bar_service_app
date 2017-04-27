import Authentication from '../controllers/authentication';
import passport from 'passport';
import passportService from'../services/passport';
import { BusinessUser }  from '../models/business-user-model';
import { ClientUser } from '../models/client-user-model';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
// BusinessUser Sign in and Log out.

// grabs all business users

module.exports = function(app) {
  app.get('/users', requireAuth, (req, res) => {
    BusinessUser
      .find()
      .exec()
      .then(response => {
        const businessJson = response.map(user => user.apiRepr());
        res.json({businessJson});
      })
  });

  // Signup
  app.post('/users', Authentication.signup, (req, res) => {
    return res.status(201).json(user.apiRepr());
  });

  // Login
  app.post('/login',requireSignin, (req, res) => {
    BusinessUser
    .findOne({email: req.body.email})
    .exec()
    .then(user => {
      res.status(201).json(user.apiRepr());
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Internal Server Error'});
    });
  });
}
