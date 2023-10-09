import React,{useEffect} from 'react'
import { useState } from "react";
import axios from 'axios'
export default function Administrator(){
    const [patient,setPatient]= useState([])
      //DATA FOR THE PATIENT
      const [policies,setPolicies]= useState([])
      //DATA FOR THE INFO
    const [pharmacist,setPharmacist]= useState([])  //DATA FOR THE PHARMACIST 
    const [records,setRecords]= useState(null) //PHARMACIST DATA
    const [tuples,setTuples]= useState(null) //PATIENT DATA
    const [info,setInfos]= useState(false)  //FOR THE VIEW

    const [post,setPost]=useState({
      name:'',
      password:''
    })


    useEffect(()=>{
         fetch('/patients') //to be changed!!!!            
        .then(res=>(res.json()))
        .then(data=>setPatient(data))
        .catch(err=>console.log(err))
         fetch('/pharmacists')  //to be changed!!!!        
        .then(res=>(res.json()))
        .then(data=>setPharmacist(data))
        .catch(err=>console.log(err))
        fetch('/policies')  //to be changed!!!!        
        .then(res=>(res.json()))
        .then(data=>setPolicies(data))
        .catch(err=>console.log(err))
 },[])
 function search(event){
  setTuples(patient.filter(obj=>obj.name===(event.target.value)))
 }
 async function  handleSubmit(event){
  event.preventDefault();
  console.log(post)
//    axios.post("http://localhost:4000/api/admins",post)
//    .then(response=>response.json())
//    .then(data=>console.log(data))
   await fetch("/api/admins",{
    method:"POST",
   headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify(post)
   }).then(response=>response.json())
    .then(data=>console.log(data))
 }
  function handleInput(event){
 setPost({...post,[event.target.name]:event.target.value})
  }
 function filter(event){
    setRecords(pharmacist.filter(obj=>obj.name===(event.target.value)))
 }
 function display(){
  setInfos((prev)=>!prev)

 }
 function deletePharmacist(){
   // axios.delete('/pharmacist'+"/"+_id)
   let track=document.getElementById('ph').value
   axios.delete('/pharmacist'+ '/'+ track); //to be checked
   let result = pharmacist.findIndex(function(object) {
    return object.Name === track;
});
   if(result!=-1){
    setPharmacist(pharmacist.splice(result,1))
   }
 }
 function deletePatient(){
   
   let track=document.getElementById('pa').value
  // axios.delete('/pharmacist'+'/'+ track); //to be checked
   let result = patient.findIndex(function(object) {
    return object.Name === track;
});
alert(result)
   if(result!=-1){
   setPatient(patient.splice(result,1))
   }
   alert(patient.length)
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
        <p key={obj._id}>{obj.name} {obj.username} 
        {obj.password} {obj.email}
        {obj.mobileNumber} {obj.gender}
        {obj.dateOfBirth}
        <br></br>
        emergency contact
        <br></br>
        {obj.emergencyContact.fullName} {obj.emergencyContact.mobileNumber}
        {obj.emergencyContact.relation}
        </p>
        
        ))
        }    
       {
        records && records.map((obj)=> 
        (
        <p key={obj._id}>{obj.name} {obj.username} {obj.password} {obj.email}{obj.hourlyRate}{obj.educationalBackground}{obj.dateOfBirth}{obj.affiliation}</p>
        ))
        }    
        <br></br>
        <form  onClick={handleSubmit}>
        <label  for="name"> name:</label>
        <input  
            id = "pa"   
            type = "text"
            placeholder="name"
            name="name" 
            onChange={handleInput}
         />
          <label  for="password"> password:</label>
          <input  
            id = "pa"  
            name="password" 
            type = "text"
            placeholder="password"
           onChange={handleInput}

         />
        <br></br>
        <button>add Admin</button>
        </form>
        <br></br>
        <button onClick={display}>
          view information uploaded by a 
          pharmacist to apply to join the platform</button> 
          {
        info && policies.map((obj)=> 
        (
        <p key={obj._id}>{obj.policies}</p>
        ))
        }    

    </div>
 )
}
