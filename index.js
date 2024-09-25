const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const routes = require("./Routes/TodoRoute");
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server Started At ${PORT}`);
});

const dataBaseConnect = require("./Config/DB-Connect");
dataBaseConnect();

app.get("/", (req, res) => {
  res.send(`<h1> Welcome Home ! </h1>`);
});
