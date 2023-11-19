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
        review(_, args) {
            return db.reviews.find(res => res.id === args.id)
        },
        game(_, args) {
            return db.games.find(res => res.id === args.id)
        },
        author(_, args) {
            return db.authors.find(res => res.id === args.id)
        }

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