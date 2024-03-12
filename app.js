// Express
const express = require("express");

// ENV
require('dotenv').config();

// App
const app = express();

app.get("/", (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log("NomadGPT listening on port 3000");
});
