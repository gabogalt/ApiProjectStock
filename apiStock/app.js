const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");

const dotenv = require("dotenv");
dotenv.config();

const { dbConnection } = require("./db/database");
dbConnection();

// REQUERIMOS RUTAS

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(compression());

// USAMOS RUTAS

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	res.sendStatus(404);
});

// error handler
app.use(function (err, req, res, next) {
	res.sendStatus(500);
});

module.exports = app;
