import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Pharmacist from "./pages/Pharmacist";
import Home from "./pages/Home";
import Administrator from "./pages/Administrator";
import PatientRegistration from "./pages/PatientRegistration";
import pharmacistRegistration from "./pages/PharmacistRegistration";


import Patient from "./pages/Patient";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <div>
         < Routes>
         <Route path="/pharmacist" Component={Pharmacist} />
         <Route path="/" Component={Home} />
         <Route path="/administrator" Component={Administrator} />
         <Route path="/pharmacistRegistration" Component={pharmacistRegistration} />
         <Route path="/patient" Component={Patient} />
         <Route path="/patientRegistration" Component={PatientRegistration} />

         </Routes>
         </div>
         </BrowserRouter>

    </div>
  );
}

export default App;
