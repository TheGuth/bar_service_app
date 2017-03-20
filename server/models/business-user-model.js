const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const BusinessUserSchema = mongoose.Schema({
    businessName: {
      type: String,
      required: true
    },
    // manager: {
    //   type: String,
    //   required: true
    // },
    email: {
      type: String,
      unique: true,
      required: true
    },
    // address: '',
    // phone: '',
    password: {
      type: String,
      required: true
    }
});

BusinessUserSchema.methods.apiRepr = function() {
  return {
    businessName: this.businessName,
    // manager: this.manager,
    username: this.email,
    id: this._id
  }
}

BusinessUserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
}

BusinessUserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
}

const BusinessUser = mongoose.model('BusinessUser', BusinessUserSchema);

module.exports = {BusinessUser};
