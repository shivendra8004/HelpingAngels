const mongoose = require('mongoose');

const feedbackschema= new mongoose.Schema({

    title:{
        type:String,
        // required:true
    }
    
    

})

const Feedback =new mongoose.model("Feedback",feedbackschema)

module.exports =Feedback;