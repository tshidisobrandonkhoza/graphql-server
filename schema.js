//how the data looks like / blueprint

export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}
type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
    author_id: Int!
    game_id: Int!
}
type Author {
id: ID!
name: String!
verified: Boolean!
reviews: [Review!]        
}
type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}
type Mutation{
    deleteGame(id: ID!): [Game],
    addGame(game: AddGameInput!): Game
    updateGame(id: ID!, updates: updateGameInput!): Game
}

input AddGameInput{
title: String!
platform: [String!]!
}

input updateGameInput{
title: String!
platform: [String!]!
}
`