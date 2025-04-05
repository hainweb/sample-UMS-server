const express= require('express')
const { signup, doLogin, getSession } = require('../controllers/authController')
const router= express.Router()

// router.post('/login')

router.post('/session',getSession)

router.post('/signup',signup)
router.post('/login', doLogin)


module.exports= router