const{ GraphQLServer } = require('graphql-yoga')

const messages = [];

const  typeDefs = `
    type Message{
        id: ID!
        user: String!
        content: String!
    }
    
    type Query{
        messages: [Message!]
    }
    
`

const resolvera = {
    Query: {
        messages: () => messages,

    }
}

const  server = new GraphQLServer();
server.start(({port}) =>{
    console.log(`Server on http://localhost:${port}/`)
})