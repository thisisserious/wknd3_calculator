console.log('Client is running');

$(function () {

  // getNums();

  $('.operation').on('click', function (event) {
    event.preventDefault();
    console.log('this:', this);

    var formData = $('form').serialize();
    console.log('formData:', formData);

    var calcObject = {};
    var firstNum = $('input[name=firstNum]').val();
    var secondNum = $('input[name=secondNum]').val();
    var mathOperation = $(this).data('operator');
    console.log('mathOperation:', mathOperation);

    calcObject.firstNum = firstNum;
    calcObject.secondNum = secondNum;
    calcObject.mathOperation = mathOperation;

    console.log('calcObject:', calcObject);

    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: formData,
      success: function (answer) {
        console.log('client.js answer:', answer);
        var $li = $('<div></div>');
        $li.append('<p>' + answer + '</p>');
        $li.append('<button id="clear">Clear</button>');
        $('#numbers').append($li);
        $('#clear').on('click', function () {
          $('#numbers').empty();
        });
      },
    });

    // $.ajax({
    //   type: 'POST',
    //   url: '/subtract',
    //   data: formData,
    //   success: function (diffObj) {
    //     console.log('diffObj:', diffObj);
    //     var $li = $('<div></div>');
    //     $li.append('<p>' + diffObj + '</p>');
    //     $li.append('<button id="clear">Clear</button>');
    //     $('#numbers').append($li);
    //     $('#clear').on('click', function () {
    //       $('#numbers').empty();
    //     });
    //   },
    // });

    var inputs = $(this).find('input[type=number]').val('');
    console.log('inputs:', inputs);
    var buttons = $(this).find('button[type=submit]').val('');
    console.log('buttons:', buttons);
  });

});

// function getNums() {
//   $.ajax({
//     type: 'GET',
//     url: '/calculator',
//     success: function (nums) {
//       console.log('nums:', nums);
//
//       // $('#numbers').empty();
//       for (key in nums) {
//         console.log('key:', key);
//       }
//
//       // nums.forEach(function (num) {
//       //   var $li = $('<li></li>');
//       //   $li.append('<p>' + body.num.firstNum + '</p>');
//       //   $li.append('<p>' + body.num.secondNum + '</p>');
//       //   $('#numbers').append($li);
//       // });
//     },
//   });
// }
