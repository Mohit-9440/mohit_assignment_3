
const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create', userController.createUser);
router.get('/getalluser', userController.getAllUsers);
router.get('/getuser/:userId', userController.getUser);
router.put('/updateuser/:userId', userController.updateUser);
router.delete('/deleteuser/:userId', userController.deleteUser);

module.exports = router;
