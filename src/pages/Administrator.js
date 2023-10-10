import React,{useEffect} from 'react'
import { useState } from "react";
import axios from 'axios'
export default function Administrator(){
    const [description,setDescription]= useState(false)  //FOR THE VIEW
    const [patient,setPatient]= useState([])
      //DATA FOR THE PATIENT
      const [policies,setPolicies]= useState([])
      //DATA FOR THE INFO
      const [data,setData]= useState([]) //API DATA

    const [pharmacist,setPharmacist]= useState([])  //DATA FOR THE PHARMACIST 
    const [records,setRecords]= useState(null) //PHARMACIST DATA
    const [tuples,setTuples]= useState(null) //PATIENT DATA
    const [info,setInfos]= useState(false)  //FOR THE VIEW
    const [record,setRecord]= useState(null) //SEARCHED  
    const [tuple,setTuple]= useState(null) //FILTERED  

   

    useEffect(()=>{
         fetch('http://localhost:4000/patients') //to be changed!!!!            
        .then(res=>(res.json()))
        .then(data=>setPatient(data))
        .catch(err=>console.log(err))
         fetch('http://localhost:4000/pharmacists')  //to be changed!!!!        
        .then(res=>(res.json()))
        .then(data=>setPharmacist(data))
        .catch(err=>console.log(err))
        fetch('http://localhost:4000/policies')  //to be changed!!!!        
        .then(res=>(res.json()))
        .then(data=>setPolicies(data))
        .catch(err=>console.log(err))
        fetch('http://localhost:4000/medicines')           
        .then(res=>(res.json()))
       .then(data=>setData(data))
        .catch(err=>console.log(err))
 },[])
 function search(event){
  setTuples(patient.filter(obj=>obj.username===(event.target.value)))
 }
 function des(){
  setDescription((prev)=>!prev)
}

  function  handleSubmit(event){
  event.preventDefault();
 
  let name=document.getElementById('name').value;
  let password=document.getElementById('pass').value;

    fetch("/api/admins",{
    method:"POST",
   headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify({
        name,
        password
      })
   }).then(response=>response.json())
    .then(data=>console.log(data))
 }
 function search1(event){
  setRecord(data.filter(obj=>obj.name===(event.target.value)))

}
function filter1(event){
  setTuple(data.filter(obj=>obj.medicalUse===(event.target.value)))
}
 
 function filter(event){
    setRecords(pharmacist.filter(obj=>obj.username===(event.target.value)))
 }
 function display(){
  setInfos((prev)=>!prev)

 }
 function deletePharmacist(){
  
   let track=document.getElementById('ph').value
   let result = pharmacist.findIndex(function(object) {
    return object.username === track;
});
   if(result!=-1){
    pharmacist.splice(result,1)
    setPharmacist([...pharmacist])

    fetch('/remPharmacist',{
      method :'DELETE',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        username:track
        })

    }).then(res =>{
      if(!res.ok){
        console.log('Problem')
        return;
      }
      return res.json();
    })
    .then(data=>{
      console.log('success')
    })
    .catch(error=>{
      console.log(error)
    })
   }
 }

 function deletePatient(){
   
   let track=document.getElementById('pa').value
   let result = patient.findIndex(function(object) {
    return object.username === track;
});
   if(result!=-1){
    patient.splice(result,1)
   setPatient([...patient])
   
   fetch('/remPatient',{
    method :'DELETE',
    headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify({
      username:track
      })

  }).then(res =>{
    if(!res.ok){
      console.log('Problem')
      return;
    }
    return res.json();
  })
  .then(data=>{
    console.log('success')
  })
  .catch(error=>{
    console.log(error)
  })
 }
}
 return (
     <div>
    
      <input  
            id = "pa"   
            type = "text"
            placeholder="view a patient's information"
            onChange={search}
         />
          <button onClick={deletePatient}>
         delete Patient
        </button>
      
      <input
           id = "ph"   
           type = "text"
           placeholder="view a pharmacist's information"
           onChange={filter}
       /> 
        
         <button onClick={deletePharmacist}>
         delete Pharmacist
         </button>
         {
        tuples && tuples.map((obj)=> 
        (
        <p key={obj._id}>
          name:{obj.name} <br></br>
          username:{obj.username} <br></br>
        password:{obj.password} <br></br>
        email:{obj.email} <br></br>
        mobileNumber:{obj.mobileNumber}<br></br> 
       gender: {obj.gender}<br></br>
        date of birthday:{obj.dateOfBirth}<br></br>
        <br></br>
        emergency contact
        <br></br>
        full Name: {obj.emergencyContact.fullName} <br></br>
        mobile Number:{obj.emergencyContact.mobileNumber}<br></br>
        relation :{obj.emergencyContact.relation}<br></br>
        </p>
        
        ))
        }    
       {
        records && records.map((obj)=> 
        (
        <p key={obj._id}>name:{obj.name}<br></br>
         username:{obj.username}<br></br>
         password: {obj.password} <br></br>
         email:{obj.email}<br></br>
         hourlyRate:{obj.hourlyRate}<br></br>
         educationalBackground:{obj.educationalBackground}<br></br>
         date of birthday:{obj.dateOfBirth}<br></br>
         affiliation: {obj.affiliation}<br></br>
         </p>
        ))
        }    
        <br></br>
        <input     
            type = "text"
            placeholder="search by name"
            onChange={search1}
         />
      <input
           type = "text"
           placeholder="filter based on medical use"
           onChange={filter1}
       /> 
       {
        record && record.map((obj)=> 
        (
        <p key={obj._id}>
         medical Use:{obj.medicalUse} <br></br>
         quantity:{obj.quantity}  <br></br>
         sales: {obj.sales}  <br></br>
         price:{obj.price}  <br></br>
         description: {obj.description} <br></br>
        activeIngredients: {obj.activeIngredients}</p>
        ))
        }  
         {
        tuple && tuple.map((obj)=> 
        (
        <p key={obj._id}> 
        name:{obj.name}  <br></br>
        quantity:{obj.quantity}  <br></br>
        sales:{obj.sales} <br></br>
         price:{obj.price} <br></br>
         description: {obj.description} <br></br>
         activeIngredients: {obj.activeIngredients}</p>
        ))
        }  
        <form >
        <label  for="name"> name:</label>
        <input  
            id = "name"   
            type = "text"
            placeholder="name"
            name="name" 
         />
          <label  for="password"> password:</label>
          <input  
            id = "pass"  
            name="password" 
            type = "text"
            placeholder="password"

         />
        <br></br>
        <button onClick={handleSubmit}>add Admin</button>
        
        </form>
        <br></br>
        <button onClick={display}>
          view information uploaded by a 
          pharmacist to apply to join the platform</button> 
          <button onClick={des}>
            view available medicines
         </button>
        
          {
        info && policies.map((obj)=> 
        (
        <p key={obj._id}>policies are :{obj.policies}</p>
        ))
        }    
{
             description && data.map(obj=><p key={obj._id} >
              price: {obj.price}<br></br>
               description:{obj.description}
               </p>)
            }  
             
    </div>
 )
}
