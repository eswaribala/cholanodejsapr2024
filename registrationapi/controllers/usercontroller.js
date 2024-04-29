const user=require('../models/user');
const validationResult=require('express-validator')
const config=require('config')
//fetch all users
exports.fetchAllUsers=async (req,res)=>{

}
//fetch by Id
exports.fetchUserById=async (req,res)=>{

}

//save the user
exports.saveUser=async (req,res)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty()){
      return res.
      status(config.get('statuscode.badRequest')).json({
          errors:errors.array()
      })
  }


}

//update User
exports.updateUser=async (req,res)=>{

}

//delete User

exports.deleteUser=async (req,res)=>{

}