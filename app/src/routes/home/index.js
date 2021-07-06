"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);


module.exports = router; //모듈화하여 다른곳에서 사용가능하게