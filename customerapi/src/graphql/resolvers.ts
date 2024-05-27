import Customer from "../db/models/customer.model";
import { randomUUID } from "crypto";

type CustomerType = {
    id: number
    firstName: string
    middleName: string
    lastName: string
    mobileNo: number
};

const getCustomer = async (args: { id: number }): Promise<Customer | null> => {
    return await Customer.findByPk(args.id);
};

const getCustomers = async (): Promise<Customer[]> => {
    return await Customer.findAll();
};

const createCustomer = async (args: {
    firstName: string, middleName: string, lastName: string, mobileNo: number
}): Promise<Customer> => {
    // generate randon uuid for pet object
   return await Customer.create({
        firstName: args.firstName,
        lastName: args.lastName,
        middleName: args.middleName,
        mobileNo:args.mobileNo,

    });

};


export const root = {
    getCustomer,
    getCustomers,
    createCustomer,

};
