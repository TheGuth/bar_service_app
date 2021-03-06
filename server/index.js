import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import Authentication from './controllers/authentication';
import passport from 'passport';
import passportService from'./services/passport';

import {PORT, DATABASE_URL} from './config';
import Path from 'path';

// Schema Imports
import {Order} from './models/order-model';
import {MenuItem} from './models/menu-model';
// import {ClientUser} from './models/client-user-model';
import {BusinessUser} from './models/business-user-model';

const requireAuth = passport.authenticate('jwtLoginBusiness', { session: false });
const requireAuthClient = passport.authenticate('jwtClientLogin', { session: false });
const requireSignin = passport.authenticate('localLoginBusiness', { session: false });

mongoose.Promise = global.Promise;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.static(process.env.CLIENT_PATH));

// AUTHENTICATION

import users from './routes/users';
import clientUsers from './routes/clientUsers';

users(app);
clientUsers(app);

app.get('/dashboard/:id', (req, res) => {
  BusinessUser
    .findById(req.params.id)
      .exec()
      .then(post => {
        res.json(post.apiRepr());
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({error: 'something went horribly awry'});
      });
});


// DRINK ENDPOINTS

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
});

app.post('/dashboard/:id/drinks', requireAuth, (req, res) => {
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
});

app.delete('/dashboard/:id/drinks/:drinkid', requireAuth, (req, res) => {
  MenuItem
    .findByIdAndRemove(req.params.drinkid)
    .exec()
    .then(() => {
      res.status(200).json({message: 'success'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

app.put('/dashboard/:id/drinks/:drinkid', requireAuth, (req, res) => {
  if (!(req.params.drinkid && req.body.drinkid && req.params.drinkid === req.body.drinkid)) {
      res.status(400).json({
        error: 'Request path id and request body id values must match'
      });
    }

    const updated = {};
    const updateableFields = ['drinkName', 'price', 'ingredients', 'imageUrl'];
    updateableFields.forEach(field => {
      if (field in req.body) {
        updated[field] = req.body[field];
      }
    });

    MenuItem
      .findByIdAndUpdate(req.params.drinkid, {$set: updated}, {new: true})
      .exec()
      .then(updatedDrink => res.status(201).json(updatedDrink.apiRepr()))
      .catch(err => res.status(500).json({message: 'Something went wrong'}));
  });

// Client ENDPOINTS

app.get('/client/dashboard/:id', requireAuth, (req, res) => {
  BusinessUser
    .findById(req.params.id)
      .exec()
      .then(post => res.json(post.apiRepr()))
      .catch(err => {
        console.error(err);
        res.status(500).json({error: 'something went horribly awry'});
  });
});

// Orders Endpoints

app.post('/order/:id', requireAuthClient, (req, res) => {
  Order
    .create({
      businessId: req.params.id,
      clientName: req.body.clientName,
      table: req.body.table,
      clientEmail: req.body.clientEmail,
      order: req.body.order,
      orderTotal: req.body.orderTotal,
      totalDrinks: req.body.totalDrinks
    })
    .then(order => res.status(201).json(order.apiRepr()))
       .catch(err => {
           console.error(err);
           res.status(500).json({error: 'Something went wrong'});
       });
   });


app.get('/order/:id', requireAuth, (req, res) => {
  Order
    .find({businessId: req.params.id})
    .exec()
    .then(orders => {
      res.json(orders.map(order => order.apiRepr()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went horribly awry'});
  });
});

app.delete('/order/:id', requireAuth, (req, res) => {
  Order
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      res.status(200).json({message: 'success'});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: process.env.CLIENT_PATH});
});


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
