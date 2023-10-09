const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminsSchema = new Schema({
    name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
 
}, 
{ timestamps: false });

const admins = mongoose.model('admins', adminsSchema);
module.exports = admins;