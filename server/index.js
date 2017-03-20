import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import {BasicStrategy} from 'passport-http';
import {PORT, DATABASE_URL} from './config';

// Schema Imports

import {MenuItem} from './models/menu-model';
// import {ClientUser} from './models/client-user-model';
import {BusinessUser} from './models/business-user-model';

mongoose.Promise = global.Promise;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
app.use(bodyParser.json());

app.use(express.static(process.env.CLIENT_PATH));


// Authentication //

const strategy = new BasicStrategy(function(username, password, callback) {
  let user;
  User
    .findOne({username: username})
    .exec()
    .then(_user => {
      user = _user;
      if (!user) {
        return callback(null, false, {message: 'Incorrect username'});
      }
      return user.validatePassword(password);
    })
    .then(isValid => {
      if (!isValid) {
        return callback(null, false, {message: 'Incorrect password'});
      }
      else {
        return callback(null, user)
      }
    });
});

passport.use(strategy);


// Endpoints

app.get('/users', (req, res) => {
  BusinessUser
    .find()
    .exec()
    .then(response => {
      const businessJson = response.map(user => user.apiRepr());
      res.json({businessJson});
    })
});

app.post('/users', (req, res) => {
  const requiredFields = ['email', 'businessName', 'password'];

  const missingIndex = requiredFields.findIndex(field => !req.body[field]);
  if (missingIndex != -1) {
    return res.status(400).json({
      message: `Missing field: ${requiredFields[missingIndex]}`
    });
  }

  let {email, businessName, password} = req.body;

  password = password.trim();

  return BusinessUser
    .find({email})
    .count()
    .exec()
    .then(count => {
      if (count > 0) {
        return res.status(422).json({message: 'username already taken'});
      }
      return BusinessUser.hashPassword(password)
    })
    .then(hash => {
      return BusinessUser
        .create({
          email: email,
          businessName: businessName,
          password: hash
        })
    })
    .then(user => {
      return res.status(201).json(user.apiRepr());
    })
    .catch(err => {
      res.status(500).json({message: 'Internal server error'})
    });
});

app.post('/login', (req, res) => {
    BusinessUser
    .findOne({email: req.body.email})
    .exec()
    .then(user => {
      res.status(201).json(user.apiRepr());
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

// app.get('/dashboard/:id', (req, res) {
//
// })

app.get('/dashboard/:id/drinks/:page', (req, res) => {
    MenuItem
    .find({createdById: req.params.id})
    .limit(10)
    .exec()
    .then(drinks => {
       res.json(drinks.map(drink => drink.apiRepr()));

    })
    .catch(err => {
     console.error(err);
     res.status(500).json({error: 'something went horribly awry'});
   });
})

app.post('/dashboard/:id/drinks', (req, res) => {
    MenuItem
    .create({
      drinkName: req.body.drinkName,
      price: req.body.price,
      createdById: req.params.id,
      ingredients: req.body.ingredients || '',
      imageUrl: req.body.imageUrl || ''
    })
    .then(drink => res.status(201).json(drink.apiRepr()))
    .catch(err => {
        console.error(err);
        res.status(500).json({error: 'Something went wrong'});
    });
})

// app.delete('/dashboard/:id/drinks/:drink-id', (req, res) {
//
// })
//
// app.put('/dashboard/:id/drinks/:drink-id', (req, res) {
//
// })




// ENDPOINTS ///

// app.post('/login', (req, res) => {
//
// }








let server;
function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT, () => {

        console.log(`Your app is listening on port ${PORT}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
