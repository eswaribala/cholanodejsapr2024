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
/**
 * @swagger
 * /api/roles/v1.0/:
 *  get:
 *    description: Use to find roles in DB
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: Roles fetched successfully.
 */
router.get('/roles/v1.0/',roleController.fetchAllRoles)



/**
 * @swagger
 * /api/roles/v1.0/{roleId}:
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
router.get('/roles/v1.0/:roleId',roleController.fetchRoleById)

/**
 * @swagger
 * /api/users/v1.0/:
 *  get:
 *    description: Use to add user in DB
 *    produces:
 *      - application/json
 *    parameters:
 *         - in: query
 *           name: pages
 *           type: integer
 *           required: false
 *           default: 0
 *           minimum: 0
 *           description: The number of items to skip before starting to collect the result set.
 *         - in: query
 *           name: limit
 *           type: integer
 *           required: false
 *           default: 20
 *           minimum: 1
 *           maximum: 100
 *           description: The numbers of items to return.
 *    responses:
 *      '200':
 *        description: Users fetched successfully.
 */
router.get('/users/v1.0/',userController.fetchAllUsers)
/**
 * @swagger
 * /api/users/v1.0/{mobileNo}:
 *  get:
 *    description: Use to find user by mobileNo in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: mobileNo
 *        description: find Mobile No  from DB.
 *        schema:
 *          type: integer
 *          required:
 *            - mobileNo
 *          properties:
 *            mobileNo:
 *              type: integer
 *    responses:
 *      '200':
 *        description: Users fetched successfully.
 */

router.get('/users/v1.0/:mobileNo',userController.fetchUserByMobileNo)
/**
 * @swagger
 * /api/users/fname/v1.0/{firstName}:
 *  get:
 *    description: Use to find user by mobileNo in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: firstName
 *        description: find Mobile No  from DB.
 *        schema:
 *          type: string
 *          required:
 *            - firstName
 *          properties:
 *            firstName:
 *              type: string
 *    responses:
 *      '200':
 *        description: Users fetched successfully.
 */
router.get('/users/fname/v1.0/:firstName',userController.fetchUserByFirstName)
/**
 * @swagger
 * /api/users/lname/v1.0/{lastName}:
 *  get:
 *    description: Use to find user by mobileNo in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: lastName
 *        description: find Mobile No  from DB.
 *        schema:
 *          type: string
 *          required:
 *            - lastName
 *          properties:
 *            lastName:
 *              type: string
 *    responses:
 *      '200':
 *        description: Users fetched successfully.
 */
router.get('/users/lname/v1.0/:lastName',userController.fetchUserByLastName)
/**
 * @swagger
 * /api/users/v1.0/{mobileNo}:
 *  put:
 *    description: Use to find user by mobileNo in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: mobileNo
 *        description: find Mobile No  from DB.
 *        schema:
 *          type: integer
 *          required:
 *            - mobileNo
 *          properties:
 *            mobileNo:
 *              type: integer
 *      - in: body
 *        name: Add user
 *        description: Update user in DB.
 *        schema:
 *          type: object
 *          required:
 *            - roles
 *            - mobileNo
 *
 *          properties:
 *            roles:
 *              type: array
 *              items:
 *                  type: string
 *
 *            mobileNo :
 *              type: integer
 *              example: 9952032862
 *
 *    responses:
 *      '200':
 *        description: Users fetched successfully.
 */


router.put('/users/v1.0/:mobileNo',userController.updateUser)
/**
 * @swagger
 * /api/users/v1.0/{mobileNo}:
 *  delete:
 *    description: Use to find user by mobileNo in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: mobileNo
 *        description: delete user by Mobile No  from DB.
 *        schema:
 *          type: integer
 *          required:
 *            - mobileNo
 *          properties:
 *            mobileNo:
 *              type: integer
 *    responses:
 *      '200':
 *        description: Users deleted successfully.
 */

router.delete('/users/v1.0/:mobileNo',userController.deleteUser)



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