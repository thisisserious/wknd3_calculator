var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    console.log('calculator.js req.body:', req.body);
    var mathOperation = req.body.mathOperation;
    var add = parseInt(req.body.firstNum) + parseInt(req.body.secondNum);
    var sum = add.toString();
    var subtract = parseInt(req.body.firstNum) - parseInt(req.body.secondNum);
    var diff = subtract.toString();
    var multiply = parseInt(req.body.firstNum) * parseInt(req.body.secondNum);
    var product = multiply.toString();
    var divide = parseInt(req.body.firstNum) / parseInt(req.body.secondNum);
    var quotient = divide.toString();

    switch (mathOperation) {
      case 'add':
        res.send(sum);
        break;
      case 'subtract':
        res.send(diff);
        break;
      case 'multiply':
        res.send(product);
        break;
      case 'divide':
        res.send(quotient);
        break;
      default:
        console.log('Error in calculator.js switch statement');
    }
  });

module.exports = router;
