
const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/users/create', userController.createUser);
router.get('/getalluser', userController.getAllUsers);
router.get('/users/getuser/:userId', userController.getUser);
router.put('/users/updateuser/:userId', userController.updateUser);
router.delete('/users/deleteuser/:userId', userController.deleteUser);

module.exports = router;
