var firstName = "Parameswari";
var lastName = null;
var mobileNo = 9952032862;
var active = true;
var roles = ["analyst", "manager"];
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["TRANSGENDER"] = 2] = "TRANSGENDER";
})(Gender || (Gender = {}));
var gender = Gender.FEMALE;
var userObject = {
    "firstName": firstName,
    "lastName": lastName,
    "mobileNo": mobileNo,
    "active": active,
    "roles": roles,
    "gender": gender
};
//declaring the function
function showUser(user, lastName) {
    user.lastName = lastName;
    Object.keys(user).forEach(function (key) {
        console.log(key + "\t" + user[key]);
    });
    //type checking
    console.log(typeof (user.active));
    //arrow function
    user.roles.forEach(function (role) {
        console.log(role);
    });
    //gender value in string
    console.log(Gender[user.gender]);
}
//call the function -- invocation
showUser(userObject, "Balasubramaniam");
