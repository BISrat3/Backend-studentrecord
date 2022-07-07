const express = require('express')
const mongoose = require ('mongoose') 
const cors = require('cors');
const morgan = require('morgan');
const app = express()
const MONGODB_URI = process.env

require('./config/db.connection')

// models



const studentsRouter = require ('./routes/studentRoutes')
// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/student', studentsRouter)
// app.use('/', controllers)


// Routes 

app.get("/", (req,res)=>{
    res.send("Student Record")
})



app.listen(process.env.PORT, ()=>
    console.log(`Listening on port:${process.env.PORT}`))