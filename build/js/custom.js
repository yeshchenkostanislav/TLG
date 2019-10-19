'use strict';

$('document').ready(function () {
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".header__menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) {
      // и не по его дочерним элементам
      $('.header__nav').removeClass('header__nav_active');
      $('.header__menu-btn').removeClass('header__menu-btn_active');
    }
  });
  $('.header__menu-btn-wrap').click(function () {

    $('.header__nav').toggleClass('header__nav_active');
    $('.header__menu-btn').toggleClass('header__menu-btn_active');
  });

  $('.header__nav-item').on('click', function () {
    $('.header__nav-item').removeClass('header__nav-item_active');
    $(this).addClass('header__nav-item_active');
  });
  $('.portfolio__list-item').on('mouseenter', function () {
    $(this).children('.portfolio__img').addClass('portfolio__img_active');
  });
  $('.portfolio__list-item').on('mouseleave', function () {
    $(this).children('.portfolio__img').removeClass('portfolio__img_active');
  });
});