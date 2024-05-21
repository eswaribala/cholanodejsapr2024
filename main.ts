import {Customer} from "./models/customer";
import {Name} from "./models/name";
import {Address} from "./models/address";
import {Individual} from "./models/Individual";
import {Gender} from "./models/gender";
import {Corporate} from "./models/corporate";
import {CompanyType} from "./models/companytype";
import {AutoGenerator} from "./models/autogenerator";


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
let individual:Individual=new Individual(AutoGenerator.generateAccountNo(10000000,1000),new Name("Parameswari",
    "Bala",""),new Address("10d","First Street",
    "Avadi","TN"),9952032862,"param@gmail.com","Test@123",
    Gender.FEMALE,new Date(1970,12,2))
console.log(individual)

//corporate
let corporate:Corporate=new Corporate(AutoGenerator.generateAccountNo(10000000,1000),new Name("VHEBANDCO",
    "Software Consulting Services",""),new Address("10d","First Street",
    "Avadi","TN"),9952032863,"vhebcompany@gmail.com","Test@123",
    CompanyType.PRIVATE);

console.log(corporate);

//runtime polymorphism
let customerObj:Customer=individual;
console.log(customerObj);

//let individualObj:Individual=customer;
