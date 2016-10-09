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
      success: getNums,
    });

    $(this).find('input[type=number]').val('');
  });
});

function getNums() {
  $.ajax({
    type: 'GET',
    url: '/calculator',
    success: function (nums) {
      $('#numbers').empty();
      nums.forEach(function (num) {
        var $li = $('<li></li>');
        $li.append('<p>' + num.firstNum + '</p>');
        $li.append('<p>' + num.secondNum + '</p>');
        $('#numbers').append($li);
      });
    },
  });
}
