export default function pharmacistRegistration(){
  function  handleSubmit(event){
    event.preventDefault();
   
    let affiliation=document.getElementById('affiliation').value;
    let dateOfBirth=document.getElementById('dateOfBirth').value;
    let educationalBackground=document.getElementById('educationalBackground').value;
    let email=document.getElementById('email').value;
    let hourlyRate=document.getElementById('hourlyRate').value;
    let username=document.getElementById('username').value;
    let name=document.getElementById('name').value;
    let password=document.getElementById('password').value;

  
      fetch("/addPharmacist",{
      method:"POST",
     headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({    
          affiliation,
          dateOfBirth,
          educationalBackground,
          email,
          hourlyRate,
          name,
          password,
          username
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
            id="dateOfBirth"
          name="dob"/> 
          <br/>
         <label  for="hr"> hourly Rate:</label>
         <input 
            id="hourlyRate"
          name="hr"/>
         <br/>
         <label  for="affiliation"> affiliation:</label>
         <input 
            id="affiliation"
          name="affiliation"/>
         <br/>
         <label  for="eb"> educational background:</label>
         <input  
            id="educationalBackground"
         name="eb"/> 
         <br/> 
         <button onClick={handleSubmit}>submit</button>
         </form>
        </>
      )
}