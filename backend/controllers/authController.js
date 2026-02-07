const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_CODE  , {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

module.exports.signup = async (req , res , next) => {
    try{
        const {name , email , password} = req.body;

        // If username or password is not provided

        if(!name || !password || !email){
            return res.status(400).json({
                status : 'falied',
                message : 'Please Provide Username and Password and email'
            })
        }

        // If user already exists

        const existUser = await User.findOne({email})

        if(existUser){
            return res.status(409).json({
                status : 'Falied',
                message : 'User already exists'
            })
        }

    const newUser = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        passwordConfirm : req.body.passwordConfirm
    })

    newUser.password = undefined

    const token = signToken(newUser._id);

    res.status(201).json({
        status : 'Success',
        token ,
        message : {
            User : newUser
        }
    })

    }
    catch(err){
        res.status(404).json({
            status : "failed",
            message :err.message ,
            stack : err.stack
        })
    }

    
}