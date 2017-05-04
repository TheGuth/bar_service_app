// import 'babel-polyfill';
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const faker = require('faker');
// const mongoose = require('mongoose');
//
// const should = chai.should();
//
// const {app, runServer, closeServer} = require('../../server/index');
// const {TEST_DATABASE_URL} = require('../../server/config');
//
// chia.use(chaiHttp);
//
// function tearDownDb() {
//   console.warn('Deleteing database');
//   return mongoose.connection.dropDatabase();
// }
//
// describe('q-less endpoints', function() {
//
//   before(function() {
//     return runServer(TEST_DATABASE_URL);
//   });
//
//   beforeEach(function() {
//
//   });
//
//   afterEach(function() {
//     return tearDownDb();
//   });
//
//   after(function() {
//     return closeServer();
//   });
//
//   describe('get /users endpoints', function() {
//
//     it('should return all existing restaurants', function() {
//       let res;
//       return chai.request(app)
//         .get('/users')
//         .then(function(_res) {
//           res = _res;
//           res.should.have.status(200);
//         });
//     });
//
//   });
//
//   describe('post /users Sign in', function() {
//
//   });
//
//   describe('post /login Business Log in', function() {
//
//   });
//
// });
