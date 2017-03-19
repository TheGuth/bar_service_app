const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MenuSchema = mongoose.Schema({
    drinkName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    ingredients: {
      type: Array,
    },
    imageUrl: {
      type: String
    }
});

MenuSchema.methods.apiRepr = function() {
  return {
    drinkName: this.drinkName,
    price: this.price,
    ingredients: this.ingredients || '',
    imageUrl: this.imageUrl || ''
  }
}

const MenuItem = mongoose.model('MenuItem', MenuSchema);

module.exports = {MenuItem};
