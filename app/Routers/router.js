/*
 * Config total routers
 * tổng hợp các router tại đây để dễ quản lý
 */

const express = require("express");
const routers = express.Router();
const studentRouter = require("./students.router");

routers.use(studentRouter);

module.exports = routers;
