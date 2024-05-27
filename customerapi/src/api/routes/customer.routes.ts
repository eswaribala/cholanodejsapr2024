import { Router } from "express";
import CustomerController from "../controllers/customer.controller";
import {Body} from "tsoa";

class CustomerRoutes {
    router = Router();
    controller = new CustomerController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        /**
         *  @openapi
         * /api/customers:
         *  post:
         *    description: Use to add user in DB
         *    produces:
         *      - application/json
         *    parameters:
         *      - in: body
         *        name: Add user
         *        description: Add user in DB.
         *        schema:
         *          type: object
         *          required:
         *            - firstName
         *            - lastName
         *            - dob
         *            - gender
         *            - mobileNo
         *            - roles
         *          properties:
         *            firstName:
         *              type: string
         *            lastName:
         *              type: string
         *            dob:
         *              type: string
         *              pattern: '^\d{4}-\d{2}-\d{2}$'
         *              example: 1970-12-02
         *            gender:
         *              type: string
         *              enum: [MALE,FEMALE,TRANSGENDER]
         *              example: MALE
         *            mobileNo :
         *              type: integer
         *              example: 9952032862
         *            roles:
         *              type: array
         *              items:
         *                  type: string
         *
         *    responses:
         *      '200':
         *        description: User added successfully.
         */
        this.router.post("/", this.controller.create);

        // Retrieve all Tutorials
        this.router.get("/", this.controller.findAll);

        // Retrieve a single Tutorial with id
        this.router.get("/:id", this.controller.findOne);

        // Update a Tutorial with id
        this.router.put("/:id", this.controller.update);

        // Delete a Tutorial with id
        this.router.delete("/:id", this.controller.delete);
    }
}

export default new CustomerRoutes().router;