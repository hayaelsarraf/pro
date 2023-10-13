import React,{useEffect} from 'react'
export default function PatientRegistration(){

    function  handleSubmit(event){
        event.preventDefault();
       
        let name=document.getElementById('name').value;
        let username=document.getElementById('username').value;
        let email=document.getElementById('email').value;
         let password=document.getElementById('password').value;
         let dateOfBirth=document.getElementById('dob').value;
        let gender=document.getElementById('gender').value;
         let mobileNumber=document.getElementById('mn').value;
         let fullName=document.getElementById('fn').value;
         let mobile=document.getElementById('m').value;
         let relation=document.getElementById('re').value;
    
      




          fetch("/addPatient",{
          method:"POST",
         headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify({
              name,
              password,
              username,
              email,
              dateOfBirth,
              gender,
              mobileNumber,
              emergencyContact:{
                fullName,
               mobileNumber: mobile,
                relation
              }
            })
         }).then(response=>response.json())
          .then(data=>console.log(data))
      }
    return(
        <>
        <form>
        <label  for="username"> username:</label>
        <input  
        id="username"
        name="username"/>
        <br/>
        <label  for="name"> name:</label>
        <input  
            id="name"
        name="name"/>
        <br/>
        <label  for="email"> email:</label>
        <input  
           id="email"
        name="email"/>
        <br/>
        <label  for="password"> password:</label>
        <input 
         id="password"
         name="password"/>
        <br/>
        <label  for="dob"> date of Birth:</label>
        <input 
         id="dob" 
         name="dob"
         type="date"/> 
      
         <br/>
        <label  for="mn"> Mobile Number:</label>
        <input  
        id="mn"
        name="mn"/>
        <br/>
        <label  for="gender"> gender:</label>
        <input 
        id="gender"
        name="gender"/>
        <br/>
        <p>your relative's info</p>
        <br/>
        <label  for="fn"> full name:</label>
        <input  
        id="fn"
        name="fn"/> 
        <br/>
        <label  for="mn">mobile number :</label>
        <input  
        id="m"
        name="m"/> 
        <br/>
        <label  for="re"> relation :</label>
        <input 
        id="re"
         name="re"/> 

        <br/> 
        <button onClick={handleSubmit}>submit</button>
        </form>
       </>
    )
}

