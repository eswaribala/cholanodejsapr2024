const http=require('http')
const config=require('config')
const axios = require("axios");
exports.validateUserGL=(req,res)=>{

    const data = JSON.stringify({
        query: `{
     validateUser(firstName: "Balasubramaniam", mobileNo: "8056050425") {
        dob
        lastName
    }
  }`,
    });
    const options = {
        hostname: 'localhost',
        path: 'graphql',
        port: 3200,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
    };
    axios.post('http://localhost:3200/graphql', data)
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



