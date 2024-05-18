const config = require("config");
const jwt = require("jsonwebtoken");
const { SecretsManagerClient, GetSecretValueCommand} = require("@aws-sdk/client-secrets-manager");
/*
const vault = require("node-vault")({
    apiVersion: "v1",
    endpoint: config.get('services.vaultUrl'),
});


vaultCall = async () => {

    vault.token = config.get('tokens.vaultToken'); // Add token to vault object for subsequent requests.

    const { data } = await vault.read("secret/data/jwtsecret"); // Retrieve the secret stored in previous steps.

    console.log(data.data.secret)
    return data.data.secret;
};

 */
const secret_name = "jwtsecret";

const client = new SecretsManagerClient({
    region: "us-east-1",
});

let response;
exports.verifyToken=async(req,res)=>{

    const token =req.body.token
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        //vaultCall().then(response=>{
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
            const decoded = jwt.verify(token, tokenValue);
            req.firstName = decoded.firstName;
            req.roles=decoded.roles;
            res.status(200).send({
                "receivedToken":token,
                "firstName":req.firstName,
                "roles":req.roles
            })
        //})

    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }


}