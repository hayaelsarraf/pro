import React,{useEffect} from 'react'
import { useState } from "react";

export default function Pharmacist(){
    const [quantity,setQuatity]= useState(false)  //FOR THE VIEW
    const [description,setDescription]= useState(false)  //FOR THE VIEW
    const [data,setData]= useState([]) //API DATA
    const [records,setRecords]= useState(null) //SEARCHED  
    const [tuples,setTuples]= useState(null) //FILTERED  
    const [view,setView]= useState(false)  //FOR THE VIEW


useEffect(()=>{
       fetch('/medicines')           
       .then(res=>(res.json()))
      .then(data=>setData(data))
       .catch(err=>console.log(err))
},[])
function  handleSubmit(event){
   event.preventDefault();
  
   
   let activeIngredients=document.getElementById('activeIngredients').value;
   let description=document.getElementById('description').value;
   let medicalUse=document.getElementById('medicalUse').value;
   let name=document.getElementById('name').value;
   let price=document.getElementById('price').value;
   let quantity=document.getElementById('quantity').value;
   let sales=document.getElementById('sales').value;

 
     fetch("/addMedicine",{
     method:"POST",
    headers:{
       'Content-Type':'application/json',
     },
     body: JSON.stringify({    
      activeIngredients,
      description,
      medicalUse,
      name,
      price,
      quantity,
      sales
       })
    }).then(response=>response.json())
     .then(data=>console.log(data))
  }
function search(event){
   setRecords(data.filter(obj=>obj.name===(event.target.value)))

}
function edit(event){
   event.preventDefault();
   let name=document.getElementById('na').value;
      let activeIngredients=document.getElementById('aIngredients').value;
     let  price=document.getElementById('pri').value;


   fetch('/updateMedicine',{
      method :'PUT',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
         name,
         activeIngredients,
         price
      })
   
    }
   )}
function filter(event){
  setTuples(data.filter(obj=>obj.medicalUse===(event.target.value)))
  
  setDescription(false) 
  setQuatity(false)
}

function des(){
   setDescription((prev)=>!prev)
   setQuatity(false)
}
function qua(){
   setQuatity((prev)=>  !prev)
   setDescription(false) 
}         
 
        return (
          <div>
            <form>
            <label  for="na"> name of medicine to be changed:</label>
        <input 
         id="na"
        />
        <br></br>

      <label  for="aIngredients">New activeIngredients:</label>

        <input 
         id="aIngredients"
        />
        <br/>
        <label  for="price"> New price:</label>
        <input 
         id="pri"
        />
        <br></br>

        <button onClick={edit}>edit</button>
        </form>

<br></br>

            <form>
        <label  for="activeIngredients"> activeIngredients:</label>
        <input 
         id="activeIngredients"
         name="activeIngredients"/>
        <br/>
        <label  for="description"> description:</label>
        <input 
         id="description"
         name="description"/>
        <br/>
        <label  for="medicalUse"> medicalUse:</label>
        <input
         id="medicalUse" 
         name="medicalUse"/>
        <br/>
        <label  for="name"> name:</label>
        <input
         id="name" 
         name="name"/>
        <br/>
        <label  for="price"> price:</label>
        <input
         id="price"
          name="price"/> 
        <br/>
        <label  for="quantity"> quantity:</label>
        <input
         id="quantity"
          name="quantity"/>
        <br/>
        <label  for="sales"> sales:</label>
        <input  
        id="sales"
        name="sales"/>
        <br/>

      
        <button onClick={handleSubmit}>submit</button>
        </form>
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
         price:{obj.price} <br></br>
         description: {obj.description} <br></br>
         </p>
        ))
        }  
         
          {
             description && 
             data.filter(obj=>obj.quantity>0)
             .map(obj=>
             <p key={obj._id} >    
              name: {obj.name}<br></br>
              price: {obj.price}<br></br>
              description:{obj.description}

               </p>)
            }  
             {
             quantity && data.map(obj=><p key={obj._id} >
                name: {obj.name}<br></br>
              quantity: {obj.quantity}<br></br>
              sales: {obj.sales}
              </p>)
            } 

           
        <br></br> 
            </div>
        )
    
         }