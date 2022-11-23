const mongoose=require('mongoose');

const feedbackschema=new mongoose.Schema({
 feedbackdesc:{
    type:String,
    required:true
 }
})

const Feedback=new mongoose.model("Feedback",feedbackschema)

module.exports=Feedback;