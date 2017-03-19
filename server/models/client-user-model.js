const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ClientUserSchema = mongoose.Schema({
    Name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
});

ClientUserSchema.methods.apiRepr = function() {
  return {
    name: this.name,
    username: this.email,
    id: this._id
  }
}

ClientUserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
}

ClientUserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
}

const ClientUser = mongoose.model('ClientUser', ClientUserSchema);

module.exports = {ClientUser};
