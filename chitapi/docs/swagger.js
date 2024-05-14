const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Sample API',
    description: '',
    version: '1.0.0',
    contact: {
      email: 'parameswaribala@gmail.com'
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    }
  },
  security: [{
    bearerAuth: []
  }]
};

module.exports = {
  swaggerDefinition,

  apis: [
    "app.js",
    "./routes/*.js"
  ]
}