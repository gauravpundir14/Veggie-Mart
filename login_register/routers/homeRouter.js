const express  = require('express')
const router = express.Router()
const userSchema = require('../models/homeSchema')

router.get('/',(req,res)=>{

    res.render('register',{title:'',password:'',email:''})
 
 })

 //submit form
 router.post('/register',async(req,res)=>{
    try{
        // const name = req.body.name
        // const email = req.body.email
        // const password = req.body.password
        const{
            name,
            email,
            password,
            cpassword
        }= req.body

        if(password==cpassword){

            const userData  = new userSchema({
                name,
                email,
                password
            })

            const useremail = await userSchema.findOne ({email:email})
          if(useremail){
            res.render('register',{title:'',password:'',email:'Email Exists'})
          }else{
            const saveData = await userData.save()
             if(saveData){
                res.render('register',{title:'Done',password:'',email:''})

             }
          }

        }  else{
            res.render('register',{title:'',password:'password not match',email:''})
        }
    }catch{
        res.render('register',{title:'Something Wrong',password:'',email:''})
    }
 })

 router.get('/login',(req,res)=>{

    res.render('login',{error:''})
 
 })




 router.post('/login',async(req,res)=>{
    try{
        const {
            email,
            password
        }= req.body

        const useremail = await userSchema.findOne({email:email})
           if(useremail && password === useremail.password){

               res.render('dashbord',{name : useremail.name})
           }else{
              res.render('login',{   error: 'Invalid Email or Password'})
           }

    }catch(err){
       console.log(err);
    }
 })

 module.exports = router