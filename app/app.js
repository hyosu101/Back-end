"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');

const app = express();
dotenv.config();

const accessLogstream = require("./src/config/log");

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
//https://www.npmjs.com/package/morgan - 모건 Tokens
app.use(morgan("dev"));
app.use(morgan("common", { stream: accessLogstream }));
app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;