const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    activeIngredients: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  medicalUse: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  sales: {
    type: Number,
    required: true,
  },
}, 
{ timestamps: false });

const medicine = mongoose.model('medicines', medicineSchema);
module.exports = medicine;