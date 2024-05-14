const config=require('config')
axios = require("axios");
const authorizationUrl=config.get('services.authorizationUrl');
exports.createChit=async(req,res)=>{
    res.status(200).send({
        "receivedToken":req.receivedToken,
        "firstName":req.firstName,
        "roles":req.roles
    })
}

exports.authenticate=(req,res,next)=>{
    const token=req.header('Authorization').split(' ')[1];
    const validationUrl=config.get('services.validationUrl');
    //authentication
    axios.post(validationUrl,{
        "token":token
    }).then(response=>{
        console.log(response.data);

            req.receivedToken=response.data.receivedToken,
            req.firstName=response.data.firstName
            req.roles=response.data.roles
            next();



    }).catch(error=>{
        console.log(error);
        res.status(500).send({
            "error":error.message
        })
    })
}
exports.authorize=(req,res,next)=>{
    axios.get(authorizationUrl+req.roles[0]).then(roleResponse=>{
        console.log(roleResponse.data)

            req.receivedToken=req.receivedToken;
            req.firstName=req.firstName;
            req.roles=roleResponse.data.roles
          next()

    }).catch(roleError=>{
        console.log(roleError);
        res.status(500).send({
            "error":roleError.message
        })
    })
}