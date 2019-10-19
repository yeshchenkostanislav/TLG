$('.contact__btn').click(function () {

  $('.contact__input').each(function (i, elem) {
    //alert($(this).val())

    if ($(elem).val().length() > 0) {
      alert($(elem).val())
    }
  });
});

$('.contact__input').blur(function () //whenever you click off an input element
  {
    if (!$(this).val()) { //if it is blank. 
      $(this).addClass('contact__input_empty');
    } else {
      $(this).removeClass('contact__input_empty');
    }
  });