const mongoose=require('mongoose');

const helpformschema=new mongoose.Schema({
 name:{
    type:String
 },
 problem:{
    type:String
 } ,
 Price:{
    type:Number
 },
 worklocation:{
    type:String
 }
})

const Forms=new mongoose.model("Forms",helpformschema)

module.exports=Forms;