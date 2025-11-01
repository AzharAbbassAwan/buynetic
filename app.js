var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var routes = require("./router.js");
const {
  CustomErrorMiddleware,
} = require("./utils/errorHandlers/CustomErrorMiddleware");
var bodyParser = require("body-parser");
//const { swaggerUi, specs, swaggerOptions } = require("./swagger/swagger");

const cors = require("cors");
var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "jade");

app.get("/", (req, res) => {
  return res.send("Hello from buynetic server");
});
// Swagger Documentation Route
//app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs, swaggerOptions));

app.use("/api/v1", routes);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// Error-handling middleware for JSON API

app.use(CustomErrorMiddleware);

module.exports = app;
