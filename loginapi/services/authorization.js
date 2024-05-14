const axios=require('axios')
const config=require('config')
const {error} = require("winston");
exports.authorize=(req,res)=>{
    const url=config.get('services.roleUrl');
    const roleId=req.params.roleId;
    console.log("received Role Id"+roleId)

    axios.get(url+roleId).then(response=>{
        console.log(response);
        res.status(200).send({
            "roles":response.data.roles
        })

    }).catch(error=>{
        res.status(500).send({
            "error":error.message
        })
    })




}
