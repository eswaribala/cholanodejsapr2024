const conn=require('../dbconfiguration/dbconn')
const user=require('../models/user');
const {validationResult}=require('express-validator')
const config=require('config')
const mongoose=require('mongoose')
const { startSession } = require('mongoose')
const redis=require('redis')
//const nodeCache=require('node-cache')
const nodeCache = require("node-cache");
const logger=require('../docs/logger')
//const redisConn= redis.createClient({url:config.get('redis.url')});
const nodeCacheClient=new nodeCache();
/*
(async ()=>{
    redisConn.on('error', (err) => {
        console.log('Redis Client Error', err);
    });
    redisConn.on('ready', () => console.log('Redis is ready'));

    await redisConn.connect();

    await redisConn.ping();
})();
*/
//fetch all users
exports.fetchAllUsers=async (req,res)=>{
    let pages = req.query.pages;
    let limit = req.query.limit;
//const value=await redisConn.get("users");
    const value=await nodeCacheClient.get("users")
if(value){
    res.send({
        "message":"cache hit success",
        "users": JSON.parse(value).slice(pages,limit)
    })
}else {

    await user.find().countDocuments().then(count => {
       // console.log(count);

       // console.log(pages);
        logger.info(`Total number of Documents ${count}`)
        logger.info(`Number of Documents to be skipped ${pages}`)
        user.find()
            .skip(pages)
            .limit(limit)
            .then(data => {
                //console.log(typeof (data[0].mobileNo))
                //save it in redis cache
               // redisConn.setEx("users", 3000, JSON.stringify(data,
                 //   (_, v) => typeof v === 'bigint' ? v.toString() : v))
                logger.info(JSON.stringify(data,
                    (_, v) => typeof v === 'bigint' ? v.toString() : v)
                )
                nodeCacheClient.set("users",JSON.stringify(data,
                       (_, v) => typeof v === 'bigint' ? v.toString() : v),3000);
                res.status(config.get('statusCode.success')).send({
                    message: 'users information ready to consume',
                    totalPages: count,
                    skipPages: pages,
                    limit: limit,
                    users: JSON.parse(JSON.stringify(data,
                        (_, v) => typeof v === 'bigint' ? v.toString() : v))
                })
            }).catch(error => {
                logger.error(`${error.message}`)
            res.status(config.get('statusCode.logicError')).send({
                message: 'users information not found',
                errorMessage: error.message
            })

        })

    }).catch(err => {
        console.log(err);

    })

}
}
//fetch by Id
exports.fetchUserByMobileNo=async (req,res)=>{
    //unique data query
    console.log(req.params.status)
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

exports.fetchUserByFirstName=async (req,res)=>{
    //unique data query

    await user.findOne({firstName:req.params.firstName})
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
exports.fetchUserByLastName=async (req,res)=>{
    //unique data query

    await user.findOne({lastName:req.params.lastName})
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

  //create session
    const session = await conn.startSession();

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
      //begin transaction
    session.startTransaction()
    try {
        await userInstance.save().then(result => {
            session.commitTransaction()
            return res.status(config.get('statusCode.created')).json({
                message: `user instance successfully created ${result}`
            })

        }).catch(err => {
            session.abortTransaction();
            return res.status(config.get('statusCode.logicError')).json({
                error: `User Could Not be Saves ${err}`
            })
        })
    }finally {
        await session.endSession()
    }



}

//update User
exports.updateUser=async (req,res)=>{
 const filter={mobileNo:req.params.mobileNo}
 const update={mobileNo:req.body.mobileNo,roles:[req.body.roles]}
 await user.findOneAndUpdate(filter,update,{new:true}).then(result=> {
     res.status(config.get('statusCode.success')).send({
         message: `user details updated for the mobileNo ${req.params.mobileNo}`,
         user: JSON.parse(JSON.stringify(result,
             (_, v) => typeof v === 'bigint' ? v.toString() : v))
     })

 }).catch(error=> {
     res.status(config.get('statusCode.logicError')).send({
         message: `user details not updated for the mobileNo ${req.params.mobileNo}`,
         error: error.message
     })
 })

}

//delete User

exports.deleteUser=async (req,res)=>{

    await user.deleteOne({mobileNo: req.params.mobileNo}).then(result=> {
        res.status(config.get('statusCode.success')).send({
            message: `user deleted for the mobileNo ${req.params.mobileNo}`,
            status: result
        })

    }).catch(error=> {
        res.status(config.get('statusCode.logicError')).send({
            message: `user not deleted for the mobileNo ${req.params.mobileNo}`,
            error: error.message
        })
    })


}