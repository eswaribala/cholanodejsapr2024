const {buildSchema} = require('graphql/utilities')

const schema=buildSchema(`
type Query{
  allUsers:[User]
  userByMobileNo(mobileNo: ID):User
}

type Mutation{
   addUser(userInput:UserInput): User
   editUser(firstName:String, mobileNo:String):User
   deleteUser(mobileNo:String):Boolean
}

input UserInput{
  firstName:String,
   lastName:String,
   dob:String,
   mobileNo:String,
   gender:String,
   roles:[String]  

}

type User{
   firstName:String,
   lastName:String,
   dob:String,
   mobileNo:String,
   gender:String,
   roles:[String]   
}
`)

module.exports=schema;
