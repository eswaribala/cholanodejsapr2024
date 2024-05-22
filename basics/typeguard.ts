import {Individual} from "../models/Individual";
import {AutoGenerator} from "../models/autogenerator";
import {Name} from "../models/name";
import {Address} from "../models/address";
import {Gender} from "../models/gender";
import {Corporate} from "../models/corporate";
import {CompanyType} from "../models/companytype";

let individual:Individual=new Individual(AutoGenerator.generateAccountNo(10000000,1000),new Name("Parameswari",
        "Bala",""),new Address("10d","First Street",
        "Avadi","TN"),9952032862,"param@gmail.com","Test@123",
    Gender.FEMALE,new Date(1970,12,2))


//corporate
let corporate:Corporate=new Corporate(AutoGenerator.generateAccountNo(10000000,1000),new Name("VHEBANDCO",
        "Software Consulting Services",""),new Address("10d","First Street",
        "Avadi","TN"),9952032863,"vhebcompany@gmail.com","Test@123",
    CompanyType.PRIVATE);

function isIndividual(customer: Individual|Corporate):customer is Corporate{
    //if object has property
    return 'companyType' in customer;
}

function displayCustomerInfo(customer: Individual | Corporate){

  console.log(`Type checking value ${isIndividual(customer)}`);
    if(isIndividual(customer)){
        console.log(`Company Type is ${customer.companyType}`)
    }else{
        console.log(`Gender Type ${Gender[customer.gender]}`)
    }

}
//test the type guard
displayCustomerInfo(individual)
displayCustomerInfo(corporate)