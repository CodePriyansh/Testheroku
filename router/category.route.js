const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controller/category.ctrl')



const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'public/images/categoryImage',
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname);
    }
})

const upload = multer({ storage: storage })
router.post('/add-category', upload.single('image'), categoryCtrl.addCategory);
router.get('/view-category', categoryCtrl.categoryList);
router.post('/update-category',upload.single('image'), categoryCtrl.updateCategory);
router.delete('/delete-category/:id', categoryCtrl.deleteCategory);
module.exports = router