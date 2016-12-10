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

});
