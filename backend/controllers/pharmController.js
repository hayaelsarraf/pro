const express= require('express')
const PharmModel= require('../Models/pharmSchema')

const getpharm= async (req,res)=>{
    const medi= await PharmModel.find({})
    res.status(200).json(medi)
   
     }
     
module.exports={getpharm}