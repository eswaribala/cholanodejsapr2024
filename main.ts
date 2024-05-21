import {Customer} from "./models/customer";
import {Name} from "./models/name";
import {Address} from "./models/address";



var customer:Customer=new Customer(2374763247,new Name("Parameswari",
    "Bala",""),new Address("10d","First Street",
    "Avadi","TN"),9952032862,"param@gmail.com","Test@123");

Object.keys(customer).forEach(key=>{
    if(key=='_address'){
        Object.keys(customer.address).forEach(akey=>{
            console.log(akey+"\t"+customer.address[akey as keyof typeof customer.address]);
        })
    }else {
        console.log(key + "\t" + customer[key as keyof typeof customer]);
    }
})
