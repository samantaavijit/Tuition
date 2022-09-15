const express = require("express");
const route = require("./routes/route");

const app = express();
const port = 5050;

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
// app.use(upload.array());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});

route(app);
