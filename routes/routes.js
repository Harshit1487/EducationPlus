const express = require('express')
const router = express.Router()

const registerTemplateCopy = require('../models/RegisterModels')
const bcrypt = require('bcryptjs')


router.post('/login', async(req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await registerTemplateCopy.findOne({email:email});
        const isMatch = await bcrypt.compare(password, useremail.password);

            if(isMatch){
                console.log("login hoo gaya....");
                // response.status(200).json({"message": "Login Sucessful"})
                res.send({"message":"Login Sucessful", registerTemplateCopy:registerTemplateCopy})
            }
            else{
                // console.log("Password did not match")
                res.send({"message": "Invalid Credentials!!"})
            }
            // bcrypt.compare(password, useremail.password, function(err, res){
            //     if(res){
            //         return res.status(200).json({"message": "Login Sucessful"})
            //     }
                // if(err){
                //     res.send({"message": "Invalid Credentials!!"})
                // }
            //     return response.json({success: false, message: 'passwords do not match'});
            // })   
        
        // else{
        //     console.log("user does not registered.....");
        //     res.send({"message": "User not registered."})
        // }
        
    }
    catch(error){
        console.log("problem");
        response.status(404).json({"message": "Problem occur.."})
        // res.status(400).send(error);
    }
    /*user.findOne({ email: email}, async(err, user)=>{
        const saltPassword = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(user.password, saltPassword)
        if(user){
            if(password === securePassword){
                console.log("Login Sucessful")
                response.status(200).json({"message": "Login Sucessful"})
                // res.send({"message":"Login Sucessful", user:user})
            }
            else{
                console.log("Password did not match")
                // res.send({"message": "Password did not match"})
            }
        }
        else{
            console.log("user not registered")
            // res.send({ "message": "user not registered"})
        }
    })*/
})

router.post('/register', async(request, response)=>{

    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const registerUser = new registerTemplateCopy({
        name:request.body.name,
        phone:request.body.phone,
        email:request.body.email,
        password:request.body.password
        // password:securePassword
    })
    registerUser.save()
    .then(data =>{
        response.status(200).json({"message": "User Register Success"})
    })
    .catch(error =>{
        response.status(404).json({"message": "Invalid Credentials"})
    })
})

module.exports = router