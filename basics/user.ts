let firstName:string="Parameswari";
let lastName:string=null;
let mobileNo:number=9952032862;
let active:boolean=true;
let roles:string[]=["analyst","manager"]
enum Gender{
    MALE,FEMALE,TRANSGENDER
}
let gender:Gender=Gender.FEMALE

let userObject:object={
    "firstName":firstName,
    "lastName":lastName,
    "mobileNo":mobileNo,
    "active":active,
    "roles":roles,
    "gender":gender
}
//declaring the function
function showUser(user:any,lastName:string):void{
    user.lastName=lastName;
    Object.keys(user).forEach((key:any)=>{
        console.log(key+"\t"+user[key as keyof typeof user])
    })



    //type checking
    console.log(typeof(user.active) );

    //arrow function
    user.roles.forEach((role: any)=>{
        console.log(role)
    })
    //gender value in string
    console.log(Gender[user.gender])

}
//call the function -- invocation
showUser(userObject,"Balasubramaniam");