const express = require("express");
const app = express();
const PORT = 9001;
const schema = require("./Schemas/index");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

app.use(cors());
// app.use(express.json);
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log("Connected on port", PORT);
});
