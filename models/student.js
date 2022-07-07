const mongoose = require('mongoose')

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
        },{
            timestamps:true,
        })
    
const Student = mongoose.model('Student', studentSchema)

module.exports = Student