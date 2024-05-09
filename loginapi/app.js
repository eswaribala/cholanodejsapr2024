const express=require('express')

const config = require('config')
const appRoute=require('./routes/approutes')

const dotenv=require('dotenv').config()
console.log(`Log Level ${process.env.LOG_LEVEL}`)

const {graphqlHTTP} = require("express-graphql");
//express instance
const app=express();
//format
app.use(express.json())

// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const SwaggerOptions = require('./docs/swagger.json');

const swaggerDocument = swaggerJsDoc(SwaggerOptions);
//cors
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
})
//if(process.env.ENVIRONMENT==='PRODUCTION')
 app.use('/api', appRoute);
//
 app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//graphql
/*
app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))
*/


app.listen(process.env.PORT || 3400);


