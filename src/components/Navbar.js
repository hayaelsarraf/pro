import {Link} from 'react-router-dom'
const Navbar =()=>{
    return (
        <header>
            <div>
                <Link to ="/pharmacist">
                  Pharmacist
                </Link>
                <br></br>

                <Link to ="/administrator">
                  Administrator
                </Link>
                <br></br>
                   <Link to ="/patient">
                  Patient 
                </Link>
            
                <br></br>
                <Link to ="/pharmacistRegistration">
                  pharmacist Registration
                </Link>
                <br></br>
                <Link to ="/patientRegistration">
                  Patient Registration
                </Link>
            </div>
        </header>
    )
}

export default Navbar