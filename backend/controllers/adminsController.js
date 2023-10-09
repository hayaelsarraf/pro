const express= require('express')
const AdminssModel= require('../Models/adminsSchema')

const createAdmin = async(req,res) => {
    
    const {name, password} = req.body
    console.log(req.body)
    console.log('saknnaid')

    const newAmin = new AdminssModel({
    name: req.body.name,
    password:req.body.password, 
    
    }) 

    await newAmin.save()
    .then (result => res.status(200).send(result))
 
};
module.exports={createAdmin}