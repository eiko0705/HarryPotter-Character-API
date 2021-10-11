const express = require("express");
const app = express();
const knex = require("./server/knex");


app.use(express.json());

app.get("/api/harrypotter", async (req, res) => {
  const result = await knex.select("*").from("harrypotter");
  res.status(200).send(result);
});

const port = 8000 || process.env.PORT;
app.listen(8000, () => {
  console.log(`🎉 Server running at https://localhost:${port}!`);
});

module.exports = app;