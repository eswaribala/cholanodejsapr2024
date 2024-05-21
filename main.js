"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name_1 = require("./models/name");
var address_1 = require("./models/address");
var Individual_1 = require("./models/Individual");
var gender_1 = require("./models/gender");
var corporate_1 = require("./models/corporate");
var companytype_1 = require("./models/companytype");
var autogenerator_1 = require("./models/autogenerator");
var customerimpl_1 = require("./business/customerimpl");
var savingsaccount_1 = require("./models/savingsaccount");
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
var individual = new Individual_1.Individual(autogenerator_1.AutoGenerator.generateAccountNo(10000000, 1000), new name_1.Name("Parameswari", "Bala", ""), new address_1.Address("10d", "First Street", "Avadi", "TN"), 9952032862, "param@gmail.com", "Test@123", gender_1.Gender.FEMALE, new Date(1970, 12, 2));
console.log(individual);
//corporate
var corporate = new corporate_1.Corporate(autogenerator_1.AutoGenerator.generateAccountNo(10000000, 1000), new name_1.Name("VHEBANDCO", "Software Consulting Services", ""), new address_1.Address("10d", "First Street", "Avadi", "TN"), 9952032863, "vhebcompany@gmail.com", "Test@123", companytype_1.CompanyType.PRIVATE);
console.log(corporate);
//runtime polymorphism
var customerObj = individual;
console.log(customerObj);
//let individualObj:Individual=customer;
var individualImpl = new customerimpl_1.IndividualImpl();
for (var i = 0; i < 10; i++) {
    individualImpl.addIndividual(individual);
    individualImpl.addAccount(new savingsaccount_1.SavingsAccount(2848732, new Date(autogenerator_1.AutoGenerator.generateYear(2024, 1970), 12, 1), individual, 0.8));
}
individualImpl.individuals.forEach(function (individual) {
    console.log(individual);
});
individualImpl.accounts.forEach(function (account) {
    console.log(account);
});
