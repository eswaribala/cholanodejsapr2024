const axios=require('axios')
const config=require('config')
const validationUrl=config.get('services.validationUrl')
let {sign}=require('jsonwebtoken')
const { SecretsManagerClient, GetSecretValueCommand} = require("@aws-sdk/client-secrets-manager");
/*
const vault = require("node-vault")({
    apiVersion: "v1",
    endpoint: config.get('services.vaultUrl'),
});


vaultCall = async () => {

    vault.token = config.get('tokens.vaultToken'); // Add token to vault object for subsequent requests.

    const data  = await vault.read("secret/data/jwtsecret"); // Retrieve the secret stored in previous steps.

    console.log(data.data.secret)
    return data.data.secret;
};

 */

const secret_name = "jwtsecret";

const client = new SecretsManagerClient({
    region: "us-east-1",
});

let response;

exports.validateUser=async(req,res)=>{
    const firstName=req.body.firstName;
    const mobileNo=req.body.mobileNo;
    axios.post(validationUrl, {
        firstName: req.body.firstName,
        mobileNo: req.body.mobileNo
    })
        .then(response => {
            //console.log(response.data);
            //secret key from vault
            let tokenValue=null;
            let token =null;
          //  vaultCall().then(vaultResponse=>{
              //  console.log("Vault response"+vaultResponse)
            //    tokenValue=vaultResponse;
            try {
                response = client.send(
                    new GetSecretValueCommand({
                        SecretId: secret_name,
                        VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
                    })
                );
            } catch (error) {
                // For a list of exceptions thrown, see
                // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
                throw error;
            }

            tokenValue = response.SecretString;


            token=sign(
                    {firstName:response.data.user.firstName ,
                        dob:response.data.user.dob,
                        roles: response.data.user.roles

                    },
                    tokenValue,
                    {
                        expiresIn: "2h",
                    }
                );
               console.log(token);
                res.status(config.get('statusCode.success')).send({
                    message: 'user found for the given mobileNo',
                    user: response.data.user,
                    jwtToken:token

                })

            //})






        })
        .catch(error=> {
           // console.log(error);
            res.status(config.get('statusCode.logicError')).send({
                message:`user could not be found for the given mobileNo ${mobileNo}`,
                errorMessage: error.message
            })
        });

}
