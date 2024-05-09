const user=require('../../models/user')

const root={
    allUsers:async ({offset,limit})=>{

        let users=await user.find().skip(offset).limit(limit)
        return JSON.parse(JSON.stringify(users,
            (_, v) => typeof v === 'bigint' ? v.toString() : v));
    },
    userByMobileNo:async(object)=>{

        let userInstance= await user
            .findOne({mobileNo:object.mobileNo})
        return JSON.parse(JSON.stringify(userInstance,
            (_, v) => typeof v === 'bigint' ? v.toString() : v));
    },
    addUser:async ({userInput})=>{
        console.log(userInput);
        const newUser=new user({
            firstName:userInput.firstName,
            lastName:userInput.lastName,
            dob:userInput.dob,
            gender:userInput.gender,
            mobileNo:userInput.mobileNo,
            roles:userInput.roles
        })
        let userInstance=await user.create(newUser);
        return userInstance;

    },

    editUser:async ({firstName,mobileNo})=>{

       let userInstance=await user.findOneAndUpdate({mobileNo:mobileNo},{firstName:firstName},
            {new:true});
       return userInstance;

    },

    deleteUser: async({mobileNo})=>{
        let data = await user.deleteOne({mobileNo:mobileNo});
        if(data.deletedCount>0){
            return true;
        }else{
            return false;
        }
    },
    validateUser:async({firstName,mobileNo})=>{
        let userInstance=await user.findOne({$and:[{firstName:firstName},{mobileNo:mobileNo}]})
        return userInstance
    }



}

module.exports=root