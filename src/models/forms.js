const mongoose=require('mongoose');

const helpformschema=new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 problem:{
    type:String,
    required:true
 } ,
 Price:{
    type:Number,
    required:true
 },
 worklocation:{
    type:String,
    required:true
 }
})

const Forms=new mongoose.model("Forms",helpformschema)

module.exports=Forms;