const config=require('config')
axios = require("axios");
exports.createChit=async(req,res)=>{
    const token=req.header('Authorization').split(' ')[1];
    const validationUrl=config.get('services.validationUrl');
    //authentication
    axios.post(validationUrl,{
        "token":token
    }).then(response=>{
        console.log(response.data);
        const authorizationUrl=config.get('services.authorizationUrl');
        //authorization
        axios.get(authorizationUrl+response.data.roles[0]).then(roleResponse=>{
            res.status(200).send({
                "receivedToken":response.data.receivedToken,
                "firstName":response.data.firstName,
                "roles":roleResponse.roles
            })
        }).catch(roleError=>{
            console.log(roleError);
            res.status(500).send({
                "error":roleError.message
            })
        })

    }).catch(error=>{
        console.log(error);
        res.status(500).send({
            "error":error.message
        })
    })
}
