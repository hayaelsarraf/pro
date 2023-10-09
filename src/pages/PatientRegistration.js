import React,{useEffect} from 'react'
export default function PatientRegistration(){
   
    return(
        <>
        <form>
        <label  for="username"> username:</label>
        <input  name="username"/>
        <br/>
        <label  for="name"> name:</label>
        <input  name="name"/>
        <br/>
        <label  for="email"> email:</label>
        <input  name="email"/>
        <br/>
        <label  for="password"> password:</label>
        <input  name="password"/>
        <br/>
        <label  for="dob"> date of Birth:</label>
        <input  name="dob"/> 
         <br/>
        <label  for="mn"> Mobile Number:</label>
        <input  name="mn"/>
        <br/>
        <label  for="gender"> gender:</label>
        <input  name="gender"/>
        <br/>
        <p>your relative's info</p>
        <br/>
        <label  for="fn"> full name:</label>
        <input  name="fn"/> 
        <label  for="mn">mobile number :</label>
        <input  name="mn"/> 
        <label  for="re"> relation :</label>
        <input  name="re"/> 

        <br/> 
        <button type="submit">submit</button>
        </form>
       </>
    )
}

