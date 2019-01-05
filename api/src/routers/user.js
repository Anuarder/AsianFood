const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/user');

router.post('/register', UserControllers.createNewUser);
router.post('/login', UserControllers.loginUser);


module.exports = router;