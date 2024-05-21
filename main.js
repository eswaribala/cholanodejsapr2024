"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./models/customer");
var name_1 = require("./models/name");
var address_1 = require("./models/address");
var customer = new customer_1.Customer(2374763247, new name_1.Name("Parameswari", "Bala", ""), new address_1.Address("10d", "First Street", "Avadi", "TN"), 9952032862, "param@gmail.com", "Test@123");
Object.keys(customer).forEach(function (key) {
    console.log(key + "\t" + customer[key]);
});
