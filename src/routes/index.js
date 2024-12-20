"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// router.get("/", ctrl.output.root);
// router.post("/submit", ctrl.process.submit);

router.get('/', ctrl.output.root);
router.get('/payment', ctrl.output.payment)

router.get('/return', ctrl.output.return);
router.post('/return', ctrl.process.return);

router.get('/approve', ctrl.output.approve);
router.post("/approve", ctrl.process.approve);

module.exports = router;