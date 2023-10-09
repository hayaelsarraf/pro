export default function pharmacistRegistration(){
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
         <label  for="hr"> hourly Rate:</label>
         <input  name="hr"/>
         <br/>
         <label  for="affiliation"> affiliation:</label>
         <input  name="affiliation"/>
         <br/>
         <label  for="eb"> educational background:</label>
         <input  name="eb"/> 
         <br/> 
         <button type="submit">submit</button>
         </form>
        </>
      )
}