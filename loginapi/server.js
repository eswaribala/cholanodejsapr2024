const config=require('config')

const vault = require("node-vault")({
    apiVersion: "v1",
    endpoint: config.get('services.vaultUrl'),
});
//const roleId = process.env.ROLE_ID;
//const secretId = process.env.SECRET_ID;

const run = async () => {
    /*
    const result = await vault.approleLogin({
       // role_id: roleId,
        //secret_id: secretId,
    });
*/
    vault.token = config.get('tokens.vaultToken'); // Add token to vault object for subsequent requests.

    const { data } = await vault.read("secret/jwtsecret"); // Retrieve the secret stored in previous steps.

    console.log(data)

  //  console.log("Attempt to delete the secret");

   // await vault.delete("secret/data/mysql/webapp"); // This attempt will fail as the AppRole node-app-role doesn't have delete permissions.
};

run();
