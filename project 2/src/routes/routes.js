const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', userController.getUsers); // Admin route to get all users
router.put('/:id/role', userController.changeRole); // Admin route to change user role
router.delete('/:id', userController.removeUser); // Admin route to delete user

module.exports = router;