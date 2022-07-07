const router = require ('express').Router();
let Student = require ('../models/student')

// Index Route
router.get('/', async (req,res)=>{
    try{
        res.json(await Student.find());
        console.log(Student)

    }
    catch (error){
        res.status(400).json(error);
    }
})

router.post("/newstudent", async (req,res) =>{
    const firstname =req.body.firstname;
    const lastname =req.body.lastname;
    const phonenumber =req.body.phonenumber;
    const stateCode =req.body.stateCode;
    const stateName =req.body.stateName;

    const newStudent = new Student({firstname, lastname, phonenumber,  stateCode, stateName})

    newStudent.save()
    .then(() => res.json('Student added'))
    .catch(error => res.status(400).json (Error))
    // try {
    //     res,json(await Student.create(req.body));
    //     res.send(req.body)
    // } catch (error){
    //     res.status(400).json(error);
    // }
})

module.exports =router