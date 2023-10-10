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
            PharmacistsModel.findOneAndDelete({username:req.body.username})
            .then(exercise=>res.json('Exercise deleted'))
            .catch(err=>res.status(400).json('Error'+err))
          
        }
module.exports={getPharmacists,createPharmacist,removePharmacist}