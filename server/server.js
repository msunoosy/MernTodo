const express= require('express')
const cors=require('cors')
var bodyParser = require('body-parser')
const app=express()
require('./models/db')
const router=require("./routes/router")
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api/tasks',router)

app.listen('3001',err=>{
    if(err)console.log(err)
    console.log("server started @ 3000")
})