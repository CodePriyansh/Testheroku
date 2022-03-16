const read = require('body-parser/lib/read');
const Admin = require('../model/admin.js') 


exports.adminSignup = (req,res)=>{
    console.log(req.body);
    Admin.create(req.body).then((result)=>{
        console.log(result)

        return res.status(200).json(result)
    }).catch((err)=>{
        return res.status(403).send(err)
    })
}

exports.adminSignin = (req,res)=>{
    console.log(req.body);
    Admin.findOne(req.body).then((result)=>{
          console.log(result);
          res.status(201).json(result)
    }).catch((err)=>{
        res.status(403).send(err)
    })
}