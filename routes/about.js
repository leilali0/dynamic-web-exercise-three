const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send(`
  <h1>About this page</h1> 
  <p>This is the about page</p> 
  <p><a href="/about/me">Learn about me</a></p>
  `);
});

router.get("/me", (req, res) => {
	res.send(`
  <h1>About me</h1> 
  <p>This is the about me</p> 
  <p><a href="/about">Go back</a></p>
  `);
});

module.exports = router;
