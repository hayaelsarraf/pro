import React,{useEffect} from 'react'
import { useState } from "react";
import axios from 'axios'
export default function Patient(){
    const [description,setDescription]= useState(false)  //FOR THE VIEW
    const [data,setData]= useState([]) //API DATA
    const [records,setRecords]= useState(null) //SEARCHED  
    const [tuples,setTuples]= useState(null) //FILTERED  
    const images =
    ["/frontend/src/Images/1.png",
    "/frontend/src/Images/2.png",
    "/frontend/src/Images/3.png"];
    useEffect(()=>{
      
       fetch('/medicines')           
       .then(res=>(res.json()))
      .then(data=>setData(data))
       .catch(err=>console.log(err))
},[])

function des(){
    setDescription((prev)=>!prev)
  }
  function search(event){
    setRecords(data.filter(obj=>obj.name===(event.target.value)))
 
 }
 function filter(event){
    setTuples(data.filter(obj=>obj.medicalUse===(event.target.value)))
 }
    return(
        <>
         <input     
            type = "text"
            placeholder="search by name"
            onChange={search}
         />
      <input
           type = "text"
           placeholder="filter based on medical use"
           onChange={filter}
       /> 
       {
        records && records.map((obj)=> 
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
        tuples && tuples.map((obj)=> 
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
         <button onClick={des}>
            view available medicines
         </button>
       
        {
             description && data.map(obj=><p key={obj._id} >  
              price: {obj.price}<br></br>
               description:{obj.description}
               </p>
              
             
               )
            }  
             
        </>
    )
}