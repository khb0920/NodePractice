"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

module.exports = router; //모듈화하여 다른곳에서 사용가능하게