const express= require('express')
const { signup, doLogin } = require('../controllers/authController')
const router= express.Router()

// router.post('/login')
router.post('/signup',signup)


module.exports= router