const express = require("express")
const helmet = require("helmet")
const projectRouter = require("./routers/project-router")
const resourceRouter = require("./routers/resource-router")
const taskRouter = require("./routers/task-router")

const db = require("./data/config");


const server = express();

server.use("/task", resourceRouter)
server.use("/project", taskRouter)
server.use("/resource", projectRouter)

module.exports = server;