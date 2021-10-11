const { gql } = require("apollo-server");

const typeDefs = gql`
    type HarryPotter {
        id: Int!
        name: String!
        gender: String
        job: String
        house: String
        wand: String
        patronus: String
        species: String
        bloodstatus: String
        haircolour: String
        eyecolour: String
        loyalty: String
        skills: String
        birth: String
        death: String
    }
    type Query {
        Characters: [HarryPotter]
        CharacterByName(name: String!): HarryPotter
        CharacterByHouse(house: String!): [HarryPotter]
    }
    input CharacterInput {
        id: Int
        name: String
        gender: String
        job: String
        house: String
        species: String
        haircolour: String
    }
    type Mutation {
        addCharacter(input: CharacterInput!): HarryPotter
        deleteCharacter(name: String!): [HarryPotter]
        editCharacter(name: String!, input: CharacterInput!): [HarryPotter]
    }
`;

module.exports = typeDefs;
