This was created during my time as a student at Code Chrysalis.
# Harry Potter Character API 🧙
1. [About](#About)
2. [Getting Started](#Getting%20Started)
3. [Query / Mutations](#Query%20/%20Mutations)

# About
If you use this API, you can easily check the profiles of 140 Harry Potter characters. You can also delete the characters you don't like and put your name in the database as a new character!

# Getting Started
Follow this guide to set up your environment.
To clone and run this application, you'll need Node.js, npm and postgreSQL installed on your computer.

1. Create a database and a table.
Create a database called `harrypotterapi`.
And in the database, create a table named `harrypotter` as follows.
```
     Column  |          Type          | Collation | Nullable | Default 
-------------+------------------------+-----------+----------+---------
 id          | integer                |           | not null | 
 name        | character varying(100) |           | not null | 
 gender      | character varying(6)   |           |          | 
 job         | character varying(50)  |           |          | 
 house       | character varying(50)  |           |          | 
 wand        | character varying(200) |           |          | 
 patronus    | character varying(50)  |           |          | 
 species     | character varying(100) |           |          | 
 bloodstatus | character varying(100) |           |          | 
 haircolour  | character varying(100) |           |          | 
 eyecolour   | character varying(100) |           |          | 
 loyalty     | character varying(200) |           |          | 
 skills      | character varying(200) |           |          | 
 birth       | character varying(100) |           |          | 
 death       | character varying(100) |           |          | 
```

2. Clone this repo and install dependencies
```bash
$ npm install
```
3. To insert datas, run the seed file
```bash
$ npx run knex seed:make characters_profile
```
4. Open the localhost in your browser
```bash
http://localhost:4000/
```

# Query / Mutation🧹
Try to get and edit various data using the Playground!

1. Query

get all characters
```
query getCharacters {
  Characters {
   // any column
  }
}
```
get a specific character by name
```
query getCharacterByName {
  CharacterByName(name:"character name") {
   // any column
  }
}
```
get characters by a specific house
```
query getCharacterByHouse {
  CharacterByHouse(house:"house name") {
  // any column
  }
}
```
2. Mutation

add a character
```
mutation addCharacter {
  addCharacter(input: {
    id: number
    name: "character name"
    gender: "gender"
    job: "job name"
    house: "house name"
    species: "species"
    haircolour: "colour"
  }) {
  // any column
  }
}
```
delete a specific character
```
mutation deleteCharacter {
  deleteCharacter(name: "character name") {
  // any column
  }
}
```
edit a specific character
```
mutation addCharacter {
  addCharacter(input: {
    id: number
    name: "character name"
    gender: "gender"
    job: "job name"
    house: "house name"
    species: "species"
    haircolour: "colour"
  }) {
  // any column
  }
}
```
