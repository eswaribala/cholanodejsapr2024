import { Request, Response } from "express";
import Customer from "../../db/models/customer.model";
import customerRepository from "../../db/repositories/customer.repository";
export interface CustomerRequest extends Request {
    firstName: string;
    middleName:string;
    lastName: string;
    mobileNo:number;
}
export default class CustomerController {

    async create(req: Request, res: Response) {
        /**
         #swagger.requestBody = {
         required: true,
         schema: { $ref: "CustomerRequest" }
         }
         */
        if (!req.body.firstName) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        try {
            const customer: Customer = req.body;
            console.log(customer);

            const savedCustomer = await customerRepository.save(customer);

            res.status(201).send(savedCustomer);
        } catch (err) {
            res.status(500).send({
                message: `Some error occurred while retrieving customers.${err}`
            });
        }
    }


    async findAll(req: Request, res: Response) {
        const firstName = typeof req.query.firstName === "string" ? req.query.firstName : "";
        const mobileNo = typeof req.query.mobileNo === "number" ? req.query.mobileNo : 0;
      // const name:FullName=new FullName();
       // name.firstName=typeof req.query.firstName === "string" ? req.query.name?.toString() : "";
       // name.lastName=typeof req.query.firstName === "string" ? req.query.name?.toString() : "";
       // name.middleName=typeof req.query.firstName === "string" ? req.query.name?.toString() : "";
        try {
            const customers = await customerRepository.retrieveAll({firstName,mobileNo});

            res.status(200).send(customers);
        } catch (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving customers."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const tutorial = await customerRepository.retrieveById(id);

            if (tutorial) res.status(200).send(tutorial);
            else
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error retrieving Tutorial with id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let customer: Customer = req.body;
        customer.id = parseInt(req.params.id);

        try {
            const num = await customerRepository.update(customer);

            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${customer.id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error updating Tutorial with id=${customer.id}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const num = await customerRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Could not delete Customer with id==${id}.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await customerRepository.deleteAll();

            res.send({ message: `${num} Customers were deleted successfully!` });
        } catch (err) {
            res.status(500).send({
                message: "Some error occurred while removing all customers."
            });
        }
    }


}