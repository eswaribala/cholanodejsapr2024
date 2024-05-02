const user=require('../models/user');
const {validationResult}=require('express-validator')
const config=require('config')
//fetch all users
exports.fetchAllUsers=(req,res)=>{
    user.find().countDocuments().then(count=>{
        console.log(count);
        let pages=req.query.pages;
        let limit=req.query.limit;
        console.log(pages);
        user.find()
            .skip(pages)
            .limit(limit)
            .then(data=>{
            //console.log(typeof (data[0].mobileNo))

            res.status(config.get('statusCode.success')).send({
                message:'users information ready to consume',
                totalPages:count,
                skipPages:pages,
                limit:limit,
                users:JSON.parse(JSON.stringify(data,
                    (_, v) => typeof v === 'bigint' ? v.toString() : v))})
        }).catch(error=>{
            res.status(config.get('statusCode.logicError')).send({
                message:'users information not found',
                errorMessage: error.message
            })

        })

    }).catch(err=>{
        console.log(err);

    })


}
//fetch by Id
exports.fetchUserByMobileNo=async (req,res)=>{
    //unique data query
    await user.findOne({mobileNo:req.params.mobileNo})
        .then(data=>{

          res.status(config.get('statusCode.success')).send({
                message:'user found for the given mobileNo',
                user:JSON.parse(JSON.stringify(data,
                    (_, v) => typeof v === 'bigint' ? v.toString() : v))})
        }).catch(error=>{
        res.status(config.get('statusCode.logicError')).send({
            message:`user could not be found for the given mobileNo ${req.params.mobileNo}`,
            errorMessage: error.message
        })

    })

}

//save the user
exports.saveUser=async (req,res)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty()){
      return res.
      status(config.get('statusCode.badRequest')).json({
          errors:errors.array()
      })
  }

  const userInstance=new user({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      dob:req.body.dob,
      gender:req.body.gender,
      mobileNo:req.body.mobileNo,
      roles:[req.body.roles]
    })
    //promise resolved --> then
    //promise rejected --> catch
    await userInstance.save().then(result=>{
        return res.
        status(config.get('statusCode.created')).json({
            message:`user instance successfully created ${result}`
        })

    }).catch(err=>{
        return res.
        status(config.get('statusCode.logicError')).json({
            error: `User Could Not be Saves ${err}`
        })
    })




}

//update User
exports.updateUser=async (req,res)=>{

}

//delete User

exports.deleteUser=async (req,res)=>{

}