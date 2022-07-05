const express = require('express')
const mongoose = require ('mongoose') 
const cors = require('cors');
const morgan = require('morgan');
// const models = require('./models')
// const controllers = require ('./Controllers')
const app = express()
const MONGODB_URL = process.env

require('./config/db.connection')

// require('dotenv').config();

// const db = require('./models')
// mongoose.connect(MONGODB_URL);

// // connecting events
// mongoose.connection
// .on('open', () => console.log('you are connected!'))
// .on('close', () => console.log('you are disconnected!'))
// .on('error', (error) => console.log(error))

// models

const studentSchema = new mongoose.Schema(
    {
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    }, 
    phonenumber:{
        type:String,
    },
    stateCode:{
        type:Number,
        default:0,
        min: 0,
        max:10,
    },
    stateName:{
        type:String,
    }
    })

const Student = mongoose.model('Student', studentSchema)

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// app.use('/', controllers)

// Routes 

app.get("/", (req,res)=>{
    res.send("Student Record")
})

// Index Route
app.get('/student', async (req,res)=>{
    try{
        res.json(await Student.find({}));

    }
    catch (error){
        res.status(400).json(error);
    }
})

app.post("/student", async (req,res) =>{
    try {
        res,json(await Student.create(req.body));
    } catch (error){
        res.status(400).json(error);
    }
})

app.listen(process.env.PORT, ()=>
    console.log(`Listening on port:${process.env.PORT}`))