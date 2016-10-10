var express = require('express');
var router = express.Router();

// var test = 'calculator.js is working';
var nums = [];
console.log('nums:', nums);
// router.get('/', function (req, res) {
//   res.send(req.body);

// console.log('test:', test);
// });

// router.post('/', function (req, res) {
//     console.log('req.body:', req.body);
//     res.send(req.body);
//   });

router.post('/', function (req, res) {
    console.log('req.body:', req.body);
    var add = parseInt(req.body.firstNum) + parseInt(req.body.secondNum);
    var sum = add.toString();
    console.log('add:', add);
    console.log('sum:', sum);
    res.send(sum);
  });

module.exports = router;
