const mongoose = require('mongoose');

const helperschema= new mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },
    
    lastname:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
         unique:true
    },
    aadhar:{
        type:Number,
        rerquired:true,
        unique:true
    },
    password:{
        type:String,
        required:true
        
    },
    cpassword:{
        type:String,
        required:true
        
    }

})

const Signup =new mongoose.model("Signup",helperschema)

module.exports =Signup;