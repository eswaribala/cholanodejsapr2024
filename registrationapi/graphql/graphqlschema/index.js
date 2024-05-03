const user=require('../../models/user')

const root={
    allUsers:async ()=>{

        let users=await user.find()
        return JSON.parse(JSON.stringify(users,
            (_, v) => typeof v === 'bigint' ? v.toString() : v));
    },

    userByMobileNo:async (obj) => {
        console.log(obj.mobileNo);

        let userInstance = await user.findOne({mobileNo:obj.mobileNo})

        return userInstance;

    }

}

module.exports=root