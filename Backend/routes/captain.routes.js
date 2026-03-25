const express = require ('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller')
const authMiddeleware = require('../middlewares/auth.middleware')

router.post ('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be at least 3 charcter long'),
    body('password').isLength({min:6}).withMessage('Password must be 6 charcters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 charcter long'),
    body('vehicle.plate').isLength({min:5}).withMessage('Plate must be at least 5 charcter long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['Car','Bike','Auto']).withMessage('Invalid Vehicle Type')
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be 6 charcters long')
],
    captainController.loginCaptain
)

router.get('/profile', authMiddeleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddeleware.authCaptain, captainController.logoutCaptain)

module.exports = router;