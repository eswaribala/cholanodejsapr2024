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
 *            gender:
 *              type: string
 *            mobileNo :
 *              type: integer
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
//save role path
router.post('/roles/v1.0/',roleController.saveRole)

module.exports = router