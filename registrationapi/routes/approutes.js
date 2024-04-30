const express = require('express')
const router = express.Router();
const userController= require('../controllers/usercontroller')
const roleController=require('../controllers/rolecontroller')
//save user path
/**
 * @swagger
 * /api/users/v1.0/:
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
router.post('/users/v1.0/', userController.saveUser)
/**
 * @swagger
 * /api/roles/v1.0/:
 *  post:
 *    description: Use to add roles in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add role
 *        description: Add role in DB.
 *        schema:
 *          type: object
 *          required:
 *            - roleId
 *            - roleName
 *          properties:
 *            roleId:
 *              type: integer
 *            roleName:
 *              type: string
 *
 *    responses:
 *      '200':
 *        description: role added successfully.
 */
router.post('/roles/v1.0/',roleController.saveRole)

router.get('/users/v1.0/',userController.fetchAllUsers)

module.exports = router