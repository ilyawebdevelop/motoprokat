import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';
import './modules/accordion-anim.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

$(".menu-item-has-children a").on("click", function (e) {
  if ($(this).hasClass("active")) {
    $(this).removeClass('active');
    $(this).siblings('.sub-menu').slideUp();
  } else {
    $(".menu-item-has-children a").each(function () {
      $(this).removeClass('active');
      $(this).siblings('.sub-menu').slideUp();
    });
    $(this).siblings('.sub-menu').slideDown();
    $(this).addClass('active');
  }
});

$(document).click(function (event) {
  if (!$(event.target).is(".sub-menu, .menu-item-has-children a, .menu-item-has-children")) {
    $(".menu-item-has-children a").removeClass('active');
    $(".menu-item-has-children a").siblings('.sub-menu').slideUp();
  }
});

// Инициализация слайдера productSlider
document.querySelectorAll('.programSlider').forEach(n => {
  const mySwiperProgram = new Swiper(n, {
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.program').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.program').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },   
    },
  });
});

// Инициализация слайдера productSlider
document.querySelectorAll('.productSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 15,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.tabs__panel').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.tabs__panel').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,    
      },
      768: {
        slidesPerView: 2,   
      },   
      992: {
        slidesPerView: 3,       
      },   
      1200: {
        slidesPerView: 4,       
      },   
    },
  });
});

// Инициализация слайдера newsSlider
document.querySelectorAll('.newsSlider').forEach(n => {
  const mySwiperNews = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.news').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.news').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,    
      },
      768: {
        slidesPerView: 2,   
      },   
      992: {
        slidesPerView: 3,       
      },       
    },
  });
});

//отключаем зум колёсиком мышки
let mapIframe = document.querySelector('#map');
let mapAction = document.querySelector('.map-action');
mapAction?.addEventListener('click', () => {
  mapIframe.classList.add('onScroll');
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_map = target == mapAction || mapAction.contains(target);
  let menu_is_active = mapIframe.classList.contains('onScroll');
  if (!its_map && menu_is_active) {
      mapIframe?.classList.remove('onScroll');
  }
})


// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');
const mobMenuOverlay = document.querySelector('.mob-menu-overlay');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const overlayToggle = function () {
  mobMenuOverlay.classList.toggle('active');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
  overlayToggle();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  overlayToggle();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_nav = target == menu || menu.contains(target);
  let overlay_is_active = mobMenuOverlay.classList.contains('active');

  if (!its_nav && overlay_is_active) {
    toggleMenu();
    toggleBurger();
    bodyOverflow();
    overlayToggle();
  }
});
