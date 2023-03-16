// import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: "cardapio-api - OpenAPI 3.0",
    description: "API para cadastro de cardápios",
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: "dev team",
      email: "dev-team@cardapio.dev"
    },
    version: "0.0.1",
    servers: [
      {
        url: "http://localhost:5000"
      }
    ],
    tags: [
      {
        name: "cardapio api",
        description: "manage cardapios and cardapio items in the database",
        externalDocs: {
          description: "api for the website",
          url: "http://cardapio.dev"
        }
      },
    ],
  },
}

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/externals/api/**/*.api.ts'],
};

// export const swaggerDocument = swaggerJSDoc(options)
