let Express = require("express");
let Router = Express.Router();
let User = require("../models/user");
const { check, validationResult } = require("express-validator");

Router.post("/login", async (req, res) => {
  res.send("Welcome to login");
});

Router.post(
  "/registration",
  [check("name", "Name is Required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
      let responseData = {
        success: false,
        message: "validation Error",
        errors: errors.array(),
      };
      // return response({
      //   statusCode: 200,
      //   status: "failed",
      //   response: responseData,
      //   res,
      // });
    }

    // console.log(req.body);
    res.send("Welcome to Registration"); // response
  }
);

module.exports = Router;
