const config=require('config')
axios = require("axios");
exports.createChit=async(req,res)=>{
    const token=req.header('Authorization').split(' ')[1];
    const validationUrl=config.get('services.validationUrl');
    axios.post(validationUrl,{
        "token":token
    }).then(response=>{
        console.log(response.data);
        res.status(200).send({
            "receivedToken":response.data.receivedToken
        })
    }).catch(error=>{
        console.log(error);
        res.status(500).send({
            "error":error.message
        })
    })
}
