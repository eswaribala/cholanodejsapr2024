const config=require('config')
exports.createChit=async(req,res)=>{
    const token=req.header('Authorization').split(' ')[1];
    const validationUrl=config.get('services.validationUrl');
    axios.post(validationUrl,{
        "token":token
    }).then(response=>{
        console.log(response);
        res.status(200).send({
            "receivedToken":response
        })
    }).catch(error=>{
        console.log(error);
        res.status(500).send({
            "error":error.message
        })
    })
}
