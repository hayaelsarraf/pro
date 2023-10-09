// External variables
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors")

mongoose.set('strictQuery', false);
require("dotenv").config();
const {getMedicines} = require("./controllers/pharmacistController");
const {getpharm} = require("./controllers/pharmController");
const {getPharmacists,createPharmacist} = require("./controllers/pharmacistsController");
const {getPatients,createPatients} = require("./controllers/patientsController");
const {createAdmin}= require("./controllers/adminsController");

const MongoURI = process.env.MONGO_URI ;
const app = express();
app.use(
    cors(
        {
            origin:"*",
            methods:["POST","GET"],
        }
    )
)

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

app.post("/addPharmacist", createPharmacist);
app.post("/addPatient", createPatients);



