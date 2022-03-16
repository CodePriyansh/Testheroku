const express = require('express');
const router = express.Router();
const productCtrl = require('../controller/product.ctrl')
const multer = require('multer')
const imgStore = multer.diskStorage({
    destination: 'public/images/categoryImage',
    filename: (req,file,callback)=>{
        callback(null, Date.now()+"-"+ file.originalname)
    }
})

const upload = multer({storage:imgStore})
router.post('/add-product',upload.single('image'),productCtrl.addProduct)  

module.exports = router