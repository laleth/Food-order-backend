const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const userRoute = require("./routes/userroute")
const foodRoute = require("./routes/foodroute")
const profileRoute = require("./routes/profileroute")
const billRoute = require("./routes/billroute")
const cors = require("cors")

const app = express()
const PORT = 5000


app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true,
  }))


app.get('/',(req,res)=>{
    res.send("Welcome to Food Order Application")
})

app.use("/users",userRoute)
app.use("/food",foodRoute)
app.use("/profile",profileRoute)
app.use("/bills",billRoute)


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Mongoose is Connected")
    app.listen(PORT,()=>console.log(`Server connected on the PORT ${PORT}`))
}).catch((error)=>{
    console.log(error.message)
})