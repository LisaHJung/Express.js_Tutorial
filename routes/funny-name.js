const express = require("express");

const router = express.Router();

const path = require("path");

const rootDir = require("../util/path");

router.get("/funny-name", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "funny-name.html"));
});

router.post("/funny-name", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
