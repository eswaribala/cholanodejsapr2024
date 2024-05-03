const {buildSchema} = require('graphql/utilities')

const schema=buildSchema(`
type Query{
  allUsers:[User]
  userByMobileNo(mobileNo: String):[User]
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
