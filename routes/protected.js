const express = require('express');
const router = express.Router();
const db = require('../config/database');
const user = require('../models/user');
const jwt = require('jsonwebtoken');


module.exports = function(req,res,next){
    const token = req.header('auth-token');
    if(!token) res.status(401).send('access denied');

    try{
        const verified = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        req.user =verified;
    }catch(err){
        res.status(400).send('invalid token');
    }
    next();
}

router.get('/login', (req,res)=>{
    res.render('landing');
})