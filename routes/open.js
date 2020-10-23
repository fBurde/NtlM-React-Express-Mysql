const express = require('express');
const router = express.Router();
const db = require('../config/database');
const user = require('../models/user');

router.get('/add', (req,res)=>{
    console.log("im inside /add");
    res.status(200).json("im am not good at this");
})

module.exports = router;