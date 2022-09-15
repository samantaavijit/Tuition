var mongoose = require("mongoose");

const databaseName = "tuition";
const mongoURI = `mongodb://localhost:27017/${databaseName}?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;

mongoose.connect(mongoURI);

var conn = mongoose.connection;

///////////////database connect////////////////////////
conn.on("connected", () => {
  console.log("database is connected successfully");
});

///////////////database disconnect/////////////////////
conn.on("disconnected", () => {
  console.log("database is disconnected successfully");
});

///////////////database error//////////////////
conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
