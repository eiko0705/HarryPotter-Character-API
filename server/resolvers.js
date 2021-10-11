const knex = require("./knex");

module.exports = {
    Query: {
        Characters: async () => {
            let result = await knex.select("*").from('harrypotter');
            return result;
        },
        CharacterByName: async (parent, args) => {
            let result = await knex.select("*").from("harrypotter").where({name: args.name});
            return result[0];
        },
        CharacterByHouse: async (parent, args) => {
            let result = await knex.select("*").from("harrypotter").where({house: args.house});
            return result;
        },
    },
    Mutation: {
        addCharacter: async (parent, args) => {
            const { input } = args;
            const result = await knex("harrypotter").insert({
                id: input.id,
                name: input.name,
                gender: input.gender,
                job: input.job,
                house: input.house,
                species: input.species,
                haircolour: input.haircolour,
            });
            return result;
        },
        deleteCharacter: async (parent, args) => {
            await knex("harrypotter")
                    .del()
                    .where({name: args.name});
            const result = await knex.select("*").from('harrypotter');
            return result;
        },
        editCharacter: async (parent, args) => {
            knex("harrypotter")
                .where({ name: args.name })
                .update({
                    "id": args.input.id,
                    "name": args.input.name,
                    "gender": args.input.gender,
                    "job": args.input.job,
                    "house": args.input.house,
                    "species": args.input.species,
                    "haircolour": args.input.haircolour,
                });
            const result = await knex.select("*").from("harrypotter").where({name: args.name});
            return result;
        }
    }
};