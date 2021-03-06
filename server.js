const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

mongoose
  .connect("mongodb://localhost:27017/chat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log("error Occured while connecting" + err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
require("./route")(app);

const server = app.listen(5000, () =>
  console.log(`Server started on port 5000`)
);
module.exports = server;
