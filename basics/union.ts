import {Individual} from "../models/Individual";
import {AutoGenerator} from "../models/autogenerator";
import {Name} from "../models/name";
import {Address} from "../models/address";
import {Gender} from "../models/gender";
import {Corporate} from "../models/corporate";
import {CompanyType} from "../models/companytype";
import {SavingsAccount} from "../models/savingsaccount";

let value:number=Math.floor(Math.random()*3);
console.log(`The Generated Value=${value}`)

type customType='Individual'|'Corporate'|'Account'

let choices:[customType,customType,customType]=['Individual','Corporate','Account']
let individual:Individual=new Individual(AutoGenerator.generateAccountNo(10000000,1000),new Name("Parameswari",
        "Bala",""),new Address("10d","First Street",
        "Avadi","TN"),9952032862,"param@gmail.com","Test@123",
    Gender.FEMALE,new Date(1970,12,2))
console.log(individual)
let guess=(choice:customType):void=>{
    console.log(`choice=${choice}`)
    let object:any=null;
    switch (choice){
        case 'Individual':
            object='selected individual'
            break;
        case 'Corporate':
            object='corporate'
            break;
        case 'Account':
            object='account'
            break;

    }
    console.log(object);

}

guess(choices[value])