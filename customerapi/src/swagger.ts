// @ts-ignore
import swaggerAutogen from 'swagger-autogen';

//ts-node src/swagger.ts

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Swagger Demo Project',
        description: 'Implementation of Swagger with TypeScript'
    },
    servers: [
        {
            url: 'http://localhost:3001',
            description: ''
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        },
        schemas: {
            CustomerRequest: {
                type: 'object',
                properties: {
                    firstName: 'string',
                    middleName: 'string',
                    lastName:'string',
                    mobileNo:'number'
                }
            }
        }
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./api/routes/index.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);