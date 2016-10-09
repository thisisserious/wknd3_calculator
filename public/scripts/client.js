console.log('Client is running');

$(function () {

  // getNums();

  $('form').on('click', 'button', function (event) {
    event.preventDefault();
    var mathOperation = $(this).data('operator');
    console.log('math operation:', mathOperation);

    var formData = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: formData,
      success: function (addObj) {
        console.log('numsObj:', addObj);
        var $li = $('<div></div>');
        $li.append('<p>' + addObj + '</p>');
        $li.append('<button id="clear">Clear</button>');
        $('#numbers').append($li);
        $('#clear').on('click', function () {
          $('#numbers').empty();
        });
      },
    });

    $.ajax({
      type: 'POST',
      url: '/subtract',
      data: formData,
      success: function (diffObj) {
        console.log('diffObj:', diffObj);
        var $li = $('<div></div>');
        $li.append('<p>' + diffObj + '</p>');
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
