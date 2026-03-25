const userModel = require('../models/user.models');
const userService = require('../services/user.services');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.models');
const captainModel = require('../models/captain.models');

module.exports.registerUser = async(req,res,next)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {fullname, email, password} = req.body;

    const isUserExist = await captainModel.findOne({email});
    if(isUserExist){
        return res.status(400).json({message : 'User already exist with this email'})
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password : hashPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token,user });
}

module.exports.loginUser = async(req,res,next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password} = req.body;

    const user = await userService.findUser({ email });

    if(!user){
        return res.status(401).json({message : 'Invalid email or password'});
    }

    const isMatch = await user.comparePass(password);

    if(!isMatch){
        return res.status(401).json({message : 'Invalid email or password'});
    }

    const token = user.generateAuthToken();

    res.cookie('token',token);

    res.status(200).json({token,user});
}

module.exports.getUserProfile = async(req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async(req,res,next)=>{

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistTokenModel.create({ token });

    res.clearCookie('token');

    res.status(200).json({ message: 'Logout successful' });
}