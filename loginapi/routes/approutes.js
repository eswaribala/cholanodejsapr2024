const express = require('express')
const router = express.Router();
const loginController= require('../controllers/logincontroller')
const service=require('../services/valudateusergl')

/**
 * @swagger
 * /api/login/v1.0/:
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
router.post('/login/v1.0/', loginController.validateUser)
/**
 * @swagger
* /api/login/gl/v1.0/:
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
router.post('/login/gl/v1.0/', service.validateUserGL)

module.exports = router