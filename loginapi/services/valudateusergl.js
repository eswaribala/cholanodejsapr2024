const http=require('http')
const config=require('config')
const axios = require("axios");
exports.validateUserGL=(req,res)=>{


    axios.post('http://localhost:3200/graphql', {
        query: `{
     validateUser(firstName: "Balasubramaniam", mobileNo: "8056050425") {
        dob
        lastName
    }
  }`,
    })
        .then(response=> {
            console.log(response.data);
            res.status(config.get('statusCode.success')).send({
                message: 'user found for the given mobileNo',
                user: response.data
            })
        })
        .catch(error=> {
            console.log(error);
            res.status(config.get('statusCode.logicError')).send({
                message:`user could not be found for the given mobileNo `,
                errorMessage: error.message
            })
        });



}



