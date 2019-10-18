$('.portfolio__list-item').on('mouseenter', function () {
  $(this).children('.portfolio__img').addClass('portfolio__img_active');
});
$('.portfolio__list-item').on('mouseleave', function () {
  $(this).children('.portfolio__img').removeClass('portfolio__img_active');
});