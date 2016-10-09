console.log('Client is running');

$(function () {

  getNums();

  $('form').on('submit', function (event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: formData,
      success: function (numsObj) {
        console.log('numsObj:', numsObj);
        var $li = $('<div></div>');
        $li.append('<p>' + numsObj + '</p>');
        $li.append('<button id="clear">Clear</button>');
        $('#numbers').append($li);
        $('#clear').on('click', function () {
          $('#numbers').empty();
        });
      },
    });

    $(this).find('input[type=number]').val('');
  });

});

function getNums() {
  $.ajax({
    type: 'GET',
    url: '/calculator',
    success: function (nums) {
      console.log('nums:', nums);

      // $('#numbers').empty();
      for (key in nums) {
        console.log('key:', key);
      }

      // nums.forEach(function (num) {
      //   var $li = $('<li></li>');
      //   $li.append('<p>' + body.num.firstNum + '</p>');
      //   $li.append('<p>' + body.num.secondNum + '</p>');
      //   $('#numbers').append($li);
      // });
    },
  });
}

$('button').on('submit', function () {
    var mathOperation = $(this).attr('id');
    console.log('math operation:', mathOperation);
  });
