const express = require("express")
require("dotenv").config()
require("./database/connection")
const mongoose = require("mongoose")


const bodyParser =require("body-parser")
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());


app.listen(port,()=>{
    console.log(`server started successfully at port ${port}`)
})