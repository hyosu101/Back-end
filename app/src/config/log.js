"use strict";

const fs = require("fs");
const appRoot = require("app-root-path");


const accessLogstream = fs.createWriteStream(
    `${appRoot}/log/access.log`,
    { flags: 'a'}
);

module.exports = accessLogstream;