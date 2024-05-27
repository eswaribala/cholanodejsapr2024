import { buildSchema } from "graphql";

const schema = buildSchema(`
   type Customer {
    id: ID!
    firstName: String!
    middleName: String!
    lastName: String!
    mobileNo: Int
  }

  type Query {
        getCustomers: [Customer]
        getCustomer(id: ID!): Customer
    }

  type Mutation {
        createCustomer(firstName: String!, middleName: String!, lastName: String, mobileNo: Int!): Customer!
        
    }
`);

export default schema;