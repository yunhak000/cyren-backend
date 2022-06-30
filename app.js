require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");

const app = express();

const port = process.env.PORT || 8080;
const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.once("open", () => {
  console.log("MongoDB has been connected!");
});

mongoose.connection.on("error", (error) => {
  console.log(error.message);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({
    status: res.status,
    message: "error",
  });
});

server.listen(port);
server.on("error", (error) => console.error(error));
server.on("listening", () => console.log(`listening on port ${port}`));
