const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const joinSchema = new Schema({
  policies: {
    type: String,
    required: true,
  },
  
}, 
{ timestamps: false });


const join = mongoose.model('conditions', joinSchema);
module.exports = join;