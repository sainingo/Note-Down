const express = require('express');
const { getUsers, loginUser, registerUser } = require('../controllers/usersController');

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/me', getUsers)


module.exports = router;