const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const joinSchema = new Schema({
    dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  emergencyContact:{
    fullName:{
        type: String,
        required: true,
    },
    mobileNumber:{
        type: String,
        required: true,
    },
    relation:{
        type: String,
        required: true,
    },
  },

  
  gender: {
    type: String,
    required: true,
  },
  
  mobileNumber: {
    type: String,
    required: true,
  },
  
  name: {
    type: String,
    required: true,
  },
  
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
}, 
{ timestamps: false });


const patients = mongoose.model('patients', joinSchema);
module.exports = patients;