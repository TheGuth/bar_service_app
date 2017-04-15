const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const BusinessUserSchema = mongoose.Schema({
    businessName: {
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

BusinessUserSchema.methods.apiRepr = function() {
  return {
    businessName: this.businessName,
    username: this.email,
    id: this._id
  }
}

// On Save Hook, encrypt password before saving a model, run this function.
BusinessUserSchema.pre('save', function(next) {
  const user = this;
  console.log(user);

  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err); }

      user.password = hash;
      next();
    });
  });
});

BusinessUserSchema.methods.comparePassword = (candidatePassword, callback) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}

const BusinessUser = mongoose.model('BusinessUser', BusinessUserSchema);

module.exports = {BusinessUser};
