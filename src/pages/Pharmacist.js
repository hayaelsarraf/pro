import React,{useEffect} from 'react'
import { useState } from "react";

export default function Pharmacist(){
    const [quantity,setQuatity]= useState(false)  //FOR THE VIEW
    const [description,setDescription]= useState(false)  //FOR THE VIEW
    const [data,setData]= useState([]) //API DATA
    const [records,setRecords]= useState(null) //SEARCHED  
    const [tuples,setTuples]= useState(null) //FILTERED  


useEffect(()=>{
       fetch('/medicines')           
       .then(res=>(res.json()))
      .then(data=>setData(data))
       .catch(err=>console.log(err))
},[])

function search(event){
   setRecords(data.filter(obj=>obj.name===(event.target.value)))

}
function filter(event){
   setTuples(data.filter(obj=>obj.medicalUse===(event.target.value)))
}
function des(){
   setDescription((prev)=>!prev)
}
function qua(){
   setQuatity((prev)=>  !prev)
}         
 
        return (
          <div>
            
         <button onClick={des}>
            view available medicines
         </button>
         <button onClick={qua}>
         view available quantity and sales medicines
         </button>
      
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
        <p key={obj._id}>{obj.medicalUse} {obj.quantity} {obj.sales} {obj.price} {obj.description}{obj.activeIngredients}</p>
        ))
        }  
         {
        tuples && tuples.map((obj)=> 
        (
        <p key={obj._id}> {obj.name} {obj.quantity} {obj.sales} {obj.price} {obj.description}{obj.activeIngredients}</p>
        ))
        }  
          {
             description && data.map(obj=><p key={obj._id} >{obj.price}{obj.description}</p>)
            }  
             {
             quantity && data.map(obj=><p key={obj._id} >{obj.quantity}{obj.sales}</p>)
            } 

           
        <br></br> 
            </div>
        )
    }
