const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const OrderSchema = mongoose.Schema({
    businessId: {
      type: String,
      required: true
    },
    clientName: {
      type: String,
      required: true
    },
    table: {
      type: Number,
    },
    clientEmail: {
      type: String,
      required: true
    },
    order: {
      type: Array,
      required: true
    },
    orderTotal: {
      type: Number,
      required: true
    },
    totalDrinks: {
      type: Number,
      required: true
    }
});

OrderSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    businessId: this.businessId,
    clientName: this.clientName,
    table: this.table || null,
    clientEmail: this.clientEmail,
    order: this.order,
    orderTotal: this.orderTotal,
    totalDrinks: this.totalDrinks
  }
}

const Order = mongoose.model('Order', OrderSchema);

module.exports = {Order};
