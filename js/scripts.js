import burgerMenu from "./module/burgerMenu.js";
import searchControl from "./module/searchControl.js";
import selectControl from "./module/selectControl.js";
import slider from "./module/slider.js";

burgerMenu({
  selectorBtn: '.navigation__btn',
  selectorMenu: '.navigation',
  classActive: 'navigation--active',
  selectorClose: '.navigation__link, .header__btn',
});

searchControl({
  selectorBtn: '.search__button',
  selectorForm: '.search',
  classActive: 'search--active',
  selectorClose: '.search__close',
});

selectControl({
  selectorBtn: '.footer__subtitle',
  selectorSelect: '.footer__nav-item',
  classActive: 'footer__nav-item--active',
  breakpoint: 760,
});

slider({
  selectorSlider: '.hero__slider',
  selectorPagination: '.hero__slider-pagination',
  bulletClass: 'hero__slider-line',
  bulletActiveClass: 'hero__slider-line--active',
});


