"use strict";

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`<h1>Hello, world!</h1><h3>Time now:</h3><pre>${(new Date()).toString()}</pre>`);
});

const server = app.listen(3000, () => {
  console.log(`Server is listening ${server.address().port}`);
});
