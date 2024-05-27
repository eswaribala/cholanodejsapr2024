import Customer from "../models/customer.model";
import {Op} from "sequelize";


interface ICustomerRepository {
    save(customer: Customer): Promise<Customer>;
    retrieveAll(searchParams: {firstName: string, mobileNo: number}): Promise<Customer[]>;
    retrieveById(id: number): Promise<Customer | null>;
    update(customer: Customer): Promise<number>;
    delete(id: number): Promise<number>;
    deleteAll(): Promise<number>;
}
interface SearchCondition {
    [key: string]: any;
}
class CustomerRepository implements ICustomerRepository {
    async delete(id: number): Promise<number> {
        try {
            const affectedRows = await Customer.destroy({ where: { id: id } });

            return affectedRows;
        } catch (error) {
            throw new Error("Failed to delete customer!");
        }
    }

    deleteAll(): Promise<number> {
        try {
            return Customer.destroy({
                where: {},
                truncate: false
            });
        } catch (error) {
            throw new Error("Failed to delete customers!");
        }
    }

    async retrieveAll(searchParams: { firstName: string; mobileNo: number }): Promise<Customer[]> {
        try {
            let condition: SearchCondition = {};

            if (searchParams?.firstName) condition.firstName = true;

            if (searchParams?.mobileNo)
                condition.mobileNo = { [Op.like]: `%${searchParams.mobileNo}%` };

            return await Customer.findAll({ where: condition });
        } catch (error) {
            throw new Error("Failed to retrieve Tutorials!");
        }
    }

    async retrieveById(id: number): Promise<Customer | null> {
        try {
            return await Customer.findByPk(id);
        } catch (error) {
            throw new Error("Failed to retrieve Customers!");
        }
    }

    async save(customer: Customer): Promise<Customer> {
        try {
            return await Customer.create({
                firstName: customer.firstName,
                lastName:customer.lastName,
                middleName:customer.middleName,
                mobileNo:customer.mobileNo,

            });
        } catch (err) {
            throw new Error("Failed to create Customer!");
        }
    }

    async update(customer: Customer): Promise<number> {
        const { id, firstName, mobileNo } = customer;

        try {
            const affectedRows = await Customer.update(
                { firstName, mobileNo },
                { where: { id: id } }
            );

            return affectedRows[0];
        } catch (error) {
            throw new Error("Failed to update Customer!");
        }
    }

}

export default new CustomerRepository();