const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/user');

router.post('/login', UserControllers.loginUser);
router.post('/register', UserControllers.createNewUser);


module.exports = router;