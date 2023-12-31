// External variables
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors")
const bodyParser =require("body-parser");
mongoose.set('strictQuery', false);
require("dotenv").config();
const {getMedicines,createMedicine,updateMedicine} = require("./controllers/pharmacistController");
const {getpharm} = require("./controllers/pharmController");
const {getPharmacists,createPharmacist,removePharmacist} = require("./controllers/pharmacistsController");
const {getPatients,createPatients,removePatient} = require("./controllers/patientsController");
const {createAdmin}= require("./controllers/adminsController");

const MongoURI = process.env.MONGO_URI ;
const app = express();
app.use(
    cors(
        {
            origin:"*",
           // methods:["POST","GET"],
        }
    )
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
 app.listen(process.env.PORT, () => {
    console.log(`Listening to requests on http://localhost:${process.env.PORT}`);
  })
})
.catch(err => console.log(err));

app.use(express.json())
app.get("/medicines", getMedicines);
app.get("/policies", getpharm);
app.get("/pharmacists", getPharmacists);
app.get("/patients", getPatients);
app.post("/api/admins", createAdmin);
app.put("/updateMedicine", updateMedicine);

app.post("/addPharmacist", createPharmacist);
app.post("/addPatient", createPatients);
app.post("/addMedicine", createMedicine);


app.delete("/remPharmacist", removePharmacist);

app.delete("/remPatient", removePatient);
