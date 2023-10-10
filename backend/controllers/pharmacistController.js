const express= require('express')
const PharmacistModel= require('../Models/medicineSchema')

const getMedicines= async (req,res)=>{
    const medicines= await PharmacistModel.find({})
    res.status(200).json(medicines)
   
     }
     const createMedicine = async(req,res) => {
        const newMedicine = new PharmacistModel({
            activeIngredients:req.body.activeIngredients,
            description: req.body.description,
            medicalUse: req.body.medicalUse,
            name:req.body.name, 
            price: req.body.price, 
            quantity:req.body.quantity, 
            sales:req.body.sales, 
        }) 
   
        await newMedicine.save()
        .then (result => res.status(200).send(result))
     
    };
     
    const updateMedicine=async(req,res)=>{
        PharmacistModel.findOne({        
            name:req.body.name,     
        })
        .then(medicine=>{
            medicine.activeIngredients=req.body.activeIngredients;
            medicine.price=req.body.price;
            medicine.save()
            .then(()=>res.json('Medicine Updated'))
            .catch(err=>res.status(400).json('Error'+ err))
        })
    }

    
module.exports={getMedicines,createMedicine,updateMedicine}
