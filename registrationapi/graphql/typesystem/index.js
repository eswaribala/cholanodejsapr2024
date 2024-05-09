const {buildSchema} = require('graphql/utilities')
const BigInt=require('graphql-bigint')
const Date=require('graphql-date')
const schema=buildSchema(`
scalar BigInt
scalar Date
enum Gender{
MALE,FEMALE,TRANSGENDER
}

type Query{
  allUsers(offset:Int,limit:Int):[User]
  userByMobileNo(mobileNo: BigInt):User
}

type Mutation{
   addUser(userInput:UserInput): User
   editUser(firstName:String, mobileNo:BigInt):User
   deleteUser(mobileNo:BigInt):Boolean
}

input UserInput{
  firstName:String,
   lastName:String,
   dob:Date,
   mobileNo:BigInt,
   gender:Gender,
   roles:[String]  

}

type User{
   firstName:String,
   lastName:String,
   dob:Date,
   mobileNo:BigInt,
   gender:Gender,
   roles:[String]   
}
`)

module.exports=schema;
