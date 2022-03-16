const User = require('../model/user');


const express = require('express');
const router =  express.Router();
// const {body,ValidationResult} = require('express-validator')

router.post('/signup',(req,res)=>{
    console.log(req.body);
    User.create(req.body).then((result)=>{
        console.log(result)
        return res.status(201).json(result)
    }).catch((err)=>{
        return res.status(404).send(err)
    })
})

router.post('/signin',(req,res)=>{
    console.log(req.body);
    User.findOne(req.body).then((result)=>{
        return res.status(201).json(result)
    }).catch((err)=>{
        return res.status(404).send(err) 
    })
})

module.exports = router

