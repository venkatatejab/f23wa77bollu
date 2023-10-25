var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  random=Math.random();
  ans=Math.sqrt(random);
  res.send(`Square Root Function applied to ${random} is ${ans} `);
});

module.exports = router;
var random=0;
var ans=0;