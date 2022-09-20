let Express = require("express");
let Router = Express.Router();
let User = require("../models/user");

Router.post("/login", async (req, res) => {
  res.send("Welcome to login");
});

module.exports = Router;
