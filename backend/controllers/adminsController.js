const express= require('express')
const AdminssModel= require('../Models/adminsSchema')

const createAdmin = async(req,res) => {
    
    const {name, password} = req.body
    const newAmin = new AdminssModel({
    name,
    password 
    
    }) 
    console.log(newAmin)
    console.log('heloooo')
    await newAmin.save()
    .then (result => res.status(200).send(result))
 
};

module.exports={createAdmin}