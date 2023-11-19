//set up the server and configure it
import { ApolloServer } from "@apollo/server"
//start the server and listen to requests
import { startStandaloneServer } from "@apollo/server/standalone"

import db from './_db.js';
//import tye definitions
import { typeDefs } from "./schema.js"
const resolvers = {
    Query: {
        reviews() {
            return db.reviews
        },
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 }
})

console.log(`🚀 Server ready at ${url}`)