const express = require('express')
const router = express.Router();
const userController= require('../controllers/usercontroller')
const roleController=require('../controllers/rolecontroller')

/**
 * @swagger
 * /api/users/validate/v1.0/:
 *  post:
 *    description: Use to validate user in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Validate user
 *        description: Validate user in DB.
 *        schema:
 *          type: object
 *          required:
 *            - firstName
 *            - mobileNo
 *
 *          properties:
 *            firstName:
 *              type: string
 *
 *            mobileNo :
 *              type: integer
 *              example: 9952032862
 *
 *    responses:
 *      '200':
 *        description: User found successfully.
 */
router.post('/users/validate/v1.0/', userController.validateUser)


module.exports = router