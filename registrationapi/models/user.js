const mongoose= require('mongoose')
const string_decoder = require("string_decoder");
const Schema= mongoose.Schema;
let userSchema=new
Schema({
   firstName:{type:String,required:true},
   lastName:{type:String,required:true},
   dob:{type:Date,required:true},
   gender:{type:String,enum:[MALE,FEMALE,TRANSGENDER],required:true},
   mobileNo:{type:BigInt,required:true}
})

