var express = require('express');
var router = express.Router();

// var test = 'calculator.js is working';
// var nums = [];
// console.log('nums:', nums);
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
    var subtract = parseInt(req.body.firstNum) - parseInt(req.body.secondNum);
    var diff = subtract.toString();
    var multiply = parseInt(req.body.firstNum) * parseInt(req.body.secondNum);
    var product = multiply.toString();
    var divide = parseInt(req.body.firstNum) / parseInt(req.body.secondNum);
    var quotient = divide.toString();
    var operation = req.body.mathOperation;
    console.log('mathOperation:', mathOperation);
    console.log('sum:', sum);
    console.log('diff:', diff);
    console.log('product:', product);
    console.log('quotient:', quotient);
    switch (operation) {
      case 'add':
        res.send(sum);
        // res.sendStatus(200);
      break;
    }

    // res.sendStatus(201);
  });

module.exports = router;
