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
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}
