const express = require('express');
const router = express.Router();
const jwt = require('jsonWebToken')
const User = require('../models/user');
const {registerValidation, loginValidation} = require('../validation');
const bcrypt = require('bcrypt');

router.post('/register', async (req,res)=>{
            //Validate User
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    
    //check for allready existing email
    const emailExist = await User.findOne({where:{email: req.body.email}});
    if(emailExist) return res.status(400).send("Email exestiert bereits")

    //Hash the Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    console.log(hashPassword);
    //create new User
    const user = User.build({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save()
        res.send(savedUser.username);
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

router.post('/login', async (req,res)=>{
    //todo add data authentication
              //Validate User
              console.log("INSIDE LOGIN ",req.body);
              const {error} = loginValidation(req.body)
              if(error) return res.status(400).send(error.details[0].message)
              
              //check if email exists
              const user = await User.findOne({where:{email: req.body.email}});
              if(!user) return res.status(400).send("Email ist falsch")
                //check Password with db 
                const validPass = await bcrypt.compare(req.body.password,user.password)
                if(!validPass) return res.status(400).send("falsches Passwort");

                //create jsonWbToken
                const token = jwt.sign({id:user.id},process.env.JWT_TOKEN_SECRET);
                res.header('auth-token',token).send(token);

                //res.send('du bist eingeloggt');
})

module.exports = router;