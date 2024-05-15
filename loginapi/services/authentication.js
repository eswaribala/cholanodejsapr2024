const config = require("config");
const jwt = require("jsonwebtoken");

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
exports.verifyToken=async(req,res)=>{

    const token =req.body.token
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        vaultCall().then(response=>{
            const decoded = jwt.verify(token, response);
            req.firstName = decoded.firstName;
            req.roles=decoded.roles;
            res.status(200).send({
                "receivedToken":token,
                "firstName":req.firstName,
                "roles":req.roles
            })
        })

    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }


}