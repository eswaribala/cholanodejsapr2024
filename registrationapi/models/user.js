const mongoose= require('mongoose')
const Schema= mongoose.Schema;
const userSchema=new
Schema({
   firstName:{
      type:String,
      required:true},
   lastName:{type:String,required:true},
   dob:{type:Date,required:true},
   gender:{type:String,
      enum:{
      values:['MALE','FEMALE','TRANSGENDER'],
         message:'{VALUE} is not supported'

      },
      required:true},
   mobileNo:{
      type:BigInt,
   validate: {
      validator: function(v) {
         return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
   },
      required:true
   },
   roles:[{type:Schema.Types.ObjectId,required:true,ref:'Role'}]
})

module.exports = mongoose.model("User",userSchema)