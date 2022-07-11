const express = require('express')

const userController = require('../controllers/userController')

const router = express.Router()

router.use(express.json())

router.post('/user', userController.postUserDetails)

module.exports = router