const express = require('express');
const router = express.Router();
const adminCtrl = require('../controller/admin.ctrl')


router.post('/signup',adminCtrl.adminSignup);
router.get('/signin',adminCtrl.adminSignin);

module.exports  = router