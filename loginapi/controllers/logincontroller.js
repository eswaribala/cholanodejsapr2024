const axios=require('axios')
const config=require('config')
const validationUrl=config.get('services.validationUrl')
exports.validateUser=async(req,res)=>{
    const firstName=req.body.firstName;
    const mobileNo=req.body.mobileNo;
    axios.post(validationUrl, {
        firstName: req.body.firstName,
        mobileNo: req.body.mobileNo
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
                message:`user could not be found for the given mobileNo ${mobileNo}`,
                errorMessage: error.message
            })
        });

}
