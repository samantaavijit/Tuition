let Express = require("express");
let Router = Express.Router();
let auth = require("./auth");

module.exports = (app) => {
  Router.get("/", (req, res) => {
    res.send("Welcome to Demo API");
  });

  app.use(Router);
  app.use(auth);
};
