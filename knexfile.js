// Update with your config settings.

module.exports = {
  client: 'pg', // this is the postgres client
  connection: {
    host : '127.0.0.1', // this is localhost
    user : 'eikoimai',
    // password : process.env.DB_PW,
    database : 'harrypotterapi',
    seeds: {
      directory: './seeds'
    }
  },
  migrations: {
    directory:'./migrations',
    tableName: 'harrypotter'
  }
};
