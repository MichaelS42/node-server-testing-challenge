// server is built here
const express = require("express");

const resourceRouter = require("./resource/users-router.js");

const server = express();

server.use(express.json());

server.use("/api/resource/", resourceRouter);

module.exports = server;
