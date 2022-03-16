const read = require('body-parser/lib/read')
const Category = require('../model/category.js')
const mongoose = require('mongoose')

exports.addCategory = (req, res) => {
    console.log(req.body)
    console.log(req.file)

    Category.create({
        name: req.body.name,
        image: 'http:localhost://3000/images/categoryImage/' + req.file.filename
    }).then((result) => {
        console.log(result)
        res.status(201).json(result)

    }).catch((err) => {
        res.status(403).send(err)
    })
}


exports.categoryList = (req, res) => {
    Category.find().then((result) => {
        console.log(result)
        res.status(200).json(result)
    }).catch((err) => {
        res.status(403).send(err)
    })
}

exports.updateCategory = (req, res) => {
    console.log(req.body)
    // console.log(req.file)
    Category.updateOne({ _id:req.body.Cid}, {
        $set: {
            name: req.body.name,
            image: 'http:localhost://3000/images/categoryImage/' + req.file.filename
        }
    }).then((result) => {
        console.log(result)
        res.status(200).json(result)
    }).catch((err) => {
        res.status(403).send(err);
    })
}

exports.deleteCategory =(req,res)=>{
    console.log(req.params.id)
    Category.deleteOne({ _id:req.params.id}).then((result) => {
        if(result.deletedCount){
            return res.status(201).json({message:"ok"})
        }else{
            return res.status(201).send({message:"not ok"})
        }
    }).catch((err)=>{
 res.status(403).send(err)
    })

}