const express = require('express');
const router = express.Router();
const verify = require('./protected');

router.get('/',verify,(req,res)=>{
    res.json("test");
});



module.exports = router;