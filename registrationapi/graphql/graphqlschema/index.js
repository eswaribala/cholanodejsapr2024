const user=require('../../models/user')

const root={
    allUsers:async ()=>{

        let users=await user.find()
        return JSON.parse(JSON.stringify(users,
            (_, v) => typeof v === 'bigint' ? v.toString() : v));
    },

    userByMobileNo:async ({mobileNo})=>{

        let user=await user.findOne({mobileNo:mobileNo})
        return JSON.parse(JSON.stringify(user,
            (_, v) => typeof v === 'bigint' ? v.toString() : v));
    }

}

module.exports=root