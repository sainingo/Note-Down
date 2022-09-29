const express = require('express');
const { getMe, loginUser, registerUser } = require('../controllers/usersController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/me', protect, getMe)


module.exports = router;