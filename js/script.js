'use strict';

// swiper
new Swiper('.swiper', {

  //стрелки
  navigation: {
    nextEl: `.swiper-button-prev`,
    prevEl: `.swiper-button-next`,
  },

  //колличество показываемыхслайдов
  slidesPerView: 1,

  //количество перелистываемых слайдов
  slidesPerGroup: 1,

  //отключить тач на компе
  simulateTouch: false,

  //упрравление слйдером с клавиатуры
  keyboard: {

    //включить управление
    enabled: true,

    //управление когда слайдер видим
    onlyInViewport: true,

    //добавить в управление PageUp b PageDown
    pageUpDown: true,
  },

  //Бесконечная прокрутка
  loop: true,

  //скорость переключения слайдов
  speed: 1000,
});

// Мобильное меню
const headerNav = document.querySelector('.header__nav');
const headerToggle = document.querySelector('.header__toggle');
const body = document.querySelector('body');
const headerLinks = document.querySelectorAll('.header__link');

const closeNav = function () {
  headerNav.classList.remove('header__nav--opened');
  body.classList.remove('fixed-page');
  headerNav.classList.add('header__nav--closed');
};

const openNav = function () {
  headerNav.classList.remove('header__nav--closed');
  headerNav.classList.add('header__nav--opened');
  body.classList.add('fixed-page');
};

const menuController = function () {
  if (!headerNav) {
    return;
  }

  headerNav.classList.remove('header__nav--nojs');

  headerToggle.addEventListener('click', function () {
    if (headerNav.classList.contains('header__nav--closed')) {
      openNav();
      return;
    }
    closeNav();
  });

  headerLinks.forEach(function (item) {
    item.addEventListener('click', function () {
      closeNav();
    });
  });
};

menuController()
