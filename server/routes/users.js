import Authentication from '../controllers/authentication';
import passport from 'passport';
import passportService from'../services/passport';
import { BusinessUser }  from '../models/business-user-model';

const requireAuthBusiness = passport.authenticate('jwt', { session: false });
const requireSigninBusiness = passport.authenticate('localLoginBusiness', { session: false });

// grabs all business users

module.exports = function(app) {

  app.get('/users', requireAuthBusiness, (req, res) => {
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
  app.post('/login', requireSigninBusiness, Authentication.signin, (req, res) => {
    BusinessUser
    .findOne({email: req.body.email})
    .exec()
    .then(user => {
      const data = {
        user: user.apiRepr(),
        token: req.token,
      }
      res.status(201).json(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'Internal Server Error'});
    });
  });
}
