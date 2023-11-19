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

    },
    Game: {
        reviews(parent) {
            return db.reviews.filter(res => res.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(res => res.author_id === parent.id)
        }
    },
    Review: {
        game(parent) {
            return db.games.find(res => res.id === parent.game_id)

        },
        author(parent) {
            return db.authors.find(res => res.id === parent.author_id)

        }
    },
    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter(res => (res.id !== args.id))
            return db.games
        },
        addGame(_, args) {

            let createdID = parseInt((db.games[db.games.length - 1]).id) + 1
            let game = {
                ...args.game,
                id: createdID
            }
            db.games.push(game)
            return game
        },
        updateGame(_, args) {
            db.games = db.games.map(res => {
                if (res.id === args.id) {

                    res.title = args.updates.title;
                    res.platform = args.updates.platform;
                    return res
                    // return {...res, ..arg.updates}
                } else {
                    return res
                }

            })
            return db.games.find(res=> res.id === args.id)
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