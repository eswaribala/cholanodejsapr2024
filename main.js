"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name_1 = require("./models/name");
var address_1 = require("./models/address");
var Individual_1 = require("./models/Individual");
var gender_1 = require("./models/gender");
var corporate_1 = require("./models/corporate");
var companytype_1 = require("./models/companytype");
//let customer:Customer=new Customer(2374763247,new Name("Parameswari",
//  "Bala",""),new Address("10d","First Street",
//"Avadi","TN"),9952032862,"param@gmail.com","Test@123");
/*
Object.keys(customer).forEach(key=>{
    if(key=='_address'){
        Object.keys(customer.address).forEach(akey=>{
            console.log(akey+"\t"+customer.address[akey as keyof typeof customer.address]);
        })
    }else {
        console.log(key + "\t" + customer[key as keyof typeof customer]);
    }
})
*/
//individual
var individual = new Individual_1.Individual(2374763247, new name_1.Name("Parameswari", "Bala", ""), new address_1.Address("10d", "First Street", "Avadi", "TN"), 9952032862, "param@gmail.com", "Test@123", gender_1.Gender.FEMALE, new Date(1970, 12, 2));
console.log(individual);
//corporate
var corporate = new corporate_1.Corporate(2374763247, new name_1.Name("VHEBANDCO", "Software Consulting Services", ""), new address_1.Address("10d", "First Street", "Avadi", "TN"), 9952032863, "vhebcompany@gmail.com", "Test@123", companytype_1.CompanyType.PRIVATE);
console.log(corporate);
//runtime polymorphism
var customerObj = individual;
console.log(customerObj);
//let individualObj:Individual=customer;
