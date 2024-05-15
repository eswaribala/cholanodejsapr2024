const express = require('express')
const router = express.Router();

const chitController=require('../controllers/chitcontroller')


/**
 * @swagger
* /api/chits/v1.0/:
*  get:
    *    description:  validate token in DB
*    produces:
*      - application/json
*
*    responses:
*      '200':
*        description: Token Validation success.
*/
router.get('/chits/v1.0/', chitController.authenticate, chitController.authorize,chitController.createChit )

module.exports = router