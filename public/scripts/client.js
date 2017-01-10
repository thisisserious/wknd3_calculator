var calculatorInputs = [];

$(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: formData,
      success: function(answer) {
        console.log('client.js answer:', answer);
        var $li = $('<div></div>');
        $li.append('<p>' + answer + '</p>');
        $li.append('<button id="clear">Clear</button>');
        $('#numbers').append($li);
        $('#clear').on('click', function() {
          $('#numbers').empty();
        });
      },
    });

    var inputs = $(this).find('input[type=number]').val('');
    console.log('inputs:', inputs);
    var buttons = $(this).find('button[type=submit]').val('');
    console.log('buttons:', buttons);
  });

  $('input[name=number]').on('click', function() {
    console.log('bootstrap buttons & this value:', this, $(this).val());
    var value = $(this).val();
    var inputs = {};
    inputs.value = value;
    console.log('inputs:', inputs);
    calculatorInputs.push(inputs);
    // switch(name) {
    //   case('number'):
    //     inputs.firstNum = value;
    //     break;
    //   case('mathOperation'):
    //     inputs.mathOperation = value;
    //     break;
    //   case('number'):
    //     inputs.secondNum = value;
    //     break;
    //   default:
    //     console.log('error in client.js switch statement');
    // }
    // inputs.firstNum = value;
    // inputs.secondNum = value;
    // inputs.mathOperation = value;
    console.log('inputs', calculatorInputs);
    // $.ajax({
    //   type: 'POST',
    //   url: '/calculator',
    //   data: value,
    // });
  });
});
