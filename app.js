/** @format */

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

// An app config
const app = express();

// Import Routes
const indexRouter = require("./routes/index");
const tinderCardRouter = require("./routes/card");

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// DB config
const mongoDB = require("./config/db");

// Routes which Should handle the requests
app.use("/", indexRouter);
app.use("/api/card", tinderCardRouter);

// Error handler
app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});

// An error handling middleware
app.use((error, req, res, next) => {
	res.status(error.status || 500).send({
		error: {
			Message: error.message,
		},
	});
});

module.exports = app;
