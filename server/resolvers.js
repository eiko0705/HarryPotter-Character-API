const data = require("./data");

module.exports = {
    Query: {
        Characters: () => {
            return data.harryPotter;
        },
        CharacterByName: (parent, args) => {
            const name = args.name;
            return data.harryPotter.find(character => character.name === name);
        },
        CharacterByHouse: (parent, args) => {
            const house = args.house;
            return data.harryPotter.filter(character => character.house === house);
        },
    },
    Mutation: {
        addCharacter: (parent, args) => {
            const { input } = args;
            data.harryPotter.push(input);
            return data.harryPotter.find(character => character.name === input.name);
        },
        deleteCharacter: (parent, args) => {
            const name = args.name;
            data.harryPotter.forEach((character, index) => {
                if (character.name === name){
                    data.harryPotter.splice(index, 1);
                }
            });
            return data.harryPotter;
        },
        editCharacter: (parent, args) => {
            const { name, input } = args;
            data.harryPotter.forEach(character => {
                if (character.name === name) {
                    character.id = input.id;
                    character.name = input.name;
                    character.gender = input.gender;
                    character.job = input.job;
                    character.house = input.house;
                    character.species = input.species;
                    character.haircolour = input.haircolour;
                }
            });
            return data.harryPotter;
        }
    }
};