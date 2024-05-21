import {Individual} from "./models/Individual";
import {AutoGenerator} from "./models/autogenerator";
import {Name} from "./models/name";
import {Address} from "./models/address";
import {Gender} from "./models/gender";
import {ResponseWrapper} from "./dtos/responsewrapper";
import {Corporate} from "./models/corporate";
import {CompanyType} from "./models/companytype";

let individual:Individual=new Individual(AutoGenerator.generateAccountNo(10000000,1000),new Name("Parameswari",
        "Bala",""),new Address("10d","First Street",
        "Avadi","TN"),9952032862,"param@gmail.com","Test@123",
    Gender.FEMALE,new Date(1970,12,2))

let corporate:Corporate=new Corporate(AutoGenerator.generateAccountNo(10000000,1000),new Name("VHEBANDCO",
        "Software Consulting Services",""),new Address("10d","First Street",
        "Avadi","TN"),9952032863,"vhebcompany@gmail.com","Test@123",
    CompanyType.PRIVATE);

let responseWrapper:ResponseWrapper<Individual, string>=new
ResponseWrapper<Individual, string>(individual,null)

console.log(responseWrapper.data)

let responseWrapper1:ResponseWrapper<Corporate, boolean>=new
ResponseWrapper<Corporate, boolean>(corporate,false);
console.log(responseWrapper1.data);

let responseWrapper2:ResponseWrapper<String, boolean>=new
ResponseWrapper<String, boolean>("Done...",false);
console.log(responseWrapper2.data);