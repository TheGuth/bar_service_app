import Authentication from '../controllers/authentication';
import passport from 'passport';
import passportService from'../services/passport';
import { BusinessUser }  from '../models/business-user-model';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });



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

  app.post('/users', Authentication.signup, (req, res) => {
    console.log(req)
    console.log('///////////////');
    console.log(res);
  })

  // app.post('/users', Authentication.signup, (req, res) => {
  //   const requiredFields = ['email', 'businessName', 'password'];
  //
  //   const missingIndex = requiredFields.findIndex(field => !req.body[field]);
  //   if (missingIndex != -1) {
  //     return res.status(400).json({
  //       message: `Missing field: ${requiredFields[missingIndex]}`
  //     });
  //   }
  //
  //   let {email, businessName, password} = req.body;
  //
  //   password = password.trim();
  //
  //   return BusinessUser
  //     .find({email})
  //     .count()
  //     .exec()
  //     .then(count => {
  //       if (count > 0) {
  //         return res.status(422).json({message: 'username already taken'});
  //       }
  //       return BusinessUser.hashPassword(password)
  //     })
  //     .then(hash => {
  //       return BusinessUser
  //         .create({
  //           email: email,
  //           businessName: businessName,
  //           password: hash
  //         })
  //     })
  //     .then(user => {
  //       return res.status(201).json(user.apiRepr());
  //     })
  //     .catch(err => {
  //       res.status(500).json({message: 'Internal server error'})
  //     });
  // });
}
