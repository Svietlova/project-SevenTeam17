import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

new Accordion('.about-me-acc-sec');

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

document.querySelector('.about-swiper-button').addEventListener('click', () => {
    const activeSlide = document.querySelector('.swiper-slide.active');
    const nextSlide = activeSlide.nextElementSibling;
    if (nextSlide) {
      activeSlide.classList.remove('active');
      nextSlide.classList.add('active');
    } else {
      const firstSlide = document.querySelector('.swiper-slide');
      activeSlide.classList.remove('active');
      firstSlide.classList.add('active');
    }
  });
  const swiperAbout = new Swiper('.about-swiper-container', {
    loop: true,
    setWrapperSize: true,
    modules: [Navigation, Keyboard, Mousewheel],
    spaceBetween: 0,
    simulateTouch: true,
    grabCursor: true,
    slideActiveClass: 'active',
  
    navigation: {
      nextEl: '.about-swiper-button',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
          },
      375: {
        slidesPerView: 2,
          },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });