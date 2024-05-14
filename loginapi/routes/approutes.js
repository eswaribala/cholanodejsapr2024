const express = require('express')
const router = express.Router();
const loginController= require('../controllers/logincontroller')
const service=require('../services/validateusergl')
const authenticate=require('../services/authentication')
const authorization=require('../services/authorization')
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
/**
 * @swagger
 * /api/verifyToken/1.0/:
 *  post:
 *    description: Use to validate user in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Validate Token
 *        description: Validate user in DB.
 *        schema:
 *          type: object
 *          required:
 *            - token
 *
 *          properties:
 *            token:
 *              type: string
 *
 *
 *    responses:
 *      '200':
 *        description: Token verified successfully.
 */
router.post('/verifyToken/v1.0/', authenticate.verifyToken)

/**
 * @swagger
 * /api/authorize/v1.0/{roleId}:
 *  get:
 *    description: Use to find user by mobileNo in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: roleId
 *        description: find Mobile No  from DB.
 *        schema:
 *          type: String
 *          required:
 *            - roleId
 *          properties:
 *            roleId:
 *              type: String
 *    responses:
 *      '200':
 *        description: Roles fetched successfully.
 */
router.get('/authorize/v1.0/:roleId', authorization.authorize)

module.exports = router