exports.verifyToken=async(req,res)=>{

   const token =req.body.token
    res.status(200).send({
        "receivedToken":token
    })

}