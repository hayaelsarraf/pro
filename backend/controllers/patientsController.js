const express= require('express')
const PatientsModel= require('../Models/patientSchema')

const getPatients= async (req,res)=>{
    const medicines= await PatientsModel.find({})
    res.status(200).json(medicines)
   
     }
     const createPatients = async(req,res) => {   
        const newPatient= new PatientsModel({
        username:req.body.username,
        name: req.body.name,
        email: req.body.email,
        password:req.body.password, 
        dateOfBirth: req.body.dateOfBirth, 
        gender:req.body.gender, 
        mobileNumber:req.body.mobileNumber, 
        emergencyContact :{
            fullName:req.body.emergencyContact.fullName,
            mobileNumber:req.body.emergencyContact.mobileNumber,
            relation:req.body.emergencyContact.mobileNumber
        }
        }) 
   
        await newPatient.save()
        .then (result => res.status(200).send(result))
     
    };  
    const removePatient=async(req,res)=>{
        const deleted= await PatientsModel.findOneAndDelete({username:req.body.username})
        res.status.send(deleted)
    }
module.exports={getPatients,createPatients,removePatient}