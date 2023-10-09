const express= require('express')
const PharmacistModel= require('../Models/medicineSchema')

const getMedicines= async (req,res)=>{
    const medicines= await PharmacistModel.find({})
    res.status(200).json(medicines)
   
     }
     
module.exports={getMedicines}