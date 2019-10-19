$('.contact__btn').click(function () {

  $('.contact__input').each(function (i, elem) {
    if (!$(this).val()) {
      $(this).addClass('contact__input_empty');
    } else {
      $(this).removeClass('contact__input_empty');
    };
  });

  if ($(".contact__input").is(".contact__input_empty")) {
    //alert('Прошу заполнить поля');
  } else {
    SendPost();
    $('.contact__input').val("");
  }

  /* Ajax-запрос */
  function SendPost() {
    jQuery.ajax({
      type: "GET",
      url: "../19/send.php",
      data: jQuery("#form").serialize(),
      success: function () {
        alert('работает');
      }
    });
  }
});

$('.contact__input').blur(function () //whenever you click off an input element
  {
    if (!$(this).val()) { //if it is blank. 
      $(this).addClass('contact__input_empty');
    } else {
      $(this).removeClass('contact__input_empty');
    }
  });