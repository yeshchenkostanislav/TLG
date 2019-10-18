'use strict';

$('document').ready(function () {
  $('.header__menu-btn').click(function () {

    $('.header__nav').toggleClass('header__nav_active');
    $(this).toggleClass('header__menu-btn_active');
  });
  $('.portfolio__list-item').on('mouseenter', function () {
    $(this).children('.portfolio__img').addClass('portfolio__img_active');
  });
  $('.portfolio__list-item').on('mouseleave', function () {
    $(this).children('.portfolio__img').removeClass('portfolio__img_active');
  });
});