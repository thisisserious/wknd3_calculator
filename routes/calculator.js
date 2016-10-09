var express = require('express');
var router = express.Router();

// var test = 'calculator.js is working';
var nums = [];

router.get('/', function (req, res) {
  // res.send(test);
  console.log('calculator.js works');
});

router.post('/', function (req, res) {
    console.log('req.body:', req.body);
    res.sendStatus(200);
  });

module.exports = router;
