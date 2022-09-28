const express = require('express');
const { getUsers } = require('../controllers/usersController');

const router = express.Router()

router.get('/api/users', getUsers)


module.exports = router;