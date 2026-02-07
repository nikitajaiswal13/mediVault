const mongoose = require('mpngoose')

const userModel = new Mongoose.Schema({
    name : {
        type : String,
        required : [true , "Please Enter Your Name"]
    },
    email : {
        type : String , 
        required : [true , "Please Enter Your Email"],
        unique : true, 
        validate : [validator.isEmail , "Please Enter Valid Email"]
    },
    password : {
        type : String ,
        required : [true , "Please Enter Your Password"],
        minLength : [8 , "Password should be atleast 8 characters long"],
        select : false
    }
})

const User = mongoose.model('User' , userModel);
module.exports = User