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
                res.send({"message":"Login Sucessful", registerTemplateCopy:registerTemplateCopy})
            }
            else{
                res.send({"message": "Invalid Credentials!!"})
            }
        
    }
    catch(error){
        console.log("problem");
        response.status(404).json({"message": "Problem occur.."})
        // res.status(400).send(error);
    }
 
})

router.post('/register', async(request, response)=>{

    const registerUser = new registerTemplateCopy({
        name:request.body.name,
        phone:request.body.phone,
        email:request.body.email,
        password:request.body.password
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