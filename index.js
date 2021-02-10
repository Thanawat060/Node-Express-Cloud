require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => s{
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app Listening at http://localhost:${port}`);
});
s