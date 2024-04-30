const express = require('express')
const router = express.Router();
const userController= require('../controllers/usercontroller')
const roleController=require('../controllers/rolecontroller')
//save user path
router.post('/users/v1.0/', userController.saveUser)
//save role path
router.post('/roles/v1.0/',roleController.saveRole)

module.exports = router