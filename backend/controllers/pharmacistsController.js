const express= require('express')
const PharmacistsModel= require('../Models/pharmacistsSchema')

const getPharmacists= async (req,res)=>{
    const medicines= await PharmacistsModel.find({})
    res.status(200).json(medicines)
   
     }
 const createPharmacist = async(req,res) => {
            const newPharmacist = new PharmacistsModel({
            username:req.body.username,
            name: req.body.name,
            email: req.body.email,
            password:req.body.password, 
            dateOfBirth: req.body.dateOfBirth, 
            hourlyRate:req.body.hourlyRate, 
            affiliation:req.body.affiliation, 
            educationalBackground:req.body.educationalBackground, 
            }) 
       
            await newPharmacist.save()
            .then (result => res.status(200).send(result))
         
        };
        const removePharmacist=async(req,res)=>{
            const deleted= await PharmacistsModel.findOneAndDelete({username:req.body.username})
            res.status.send(deleted)
        }
module.exports={getPharmacists,createPharmacist,removePharmacist}