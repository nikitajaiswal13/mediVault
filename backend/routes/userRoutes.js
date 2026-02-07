const express = require('express')
const userControllers = require("../controllers/userController")
const authControllers = require("../controllers/authController")

const router = express.Router()
router.post('/signup' , authControllers.signup)
router.post('/login' , authControllers.login)

router.route('/').get(userControllers.getAllUsers)
router.route('/:id').get(userControllers.getUser)
module.exports = router;