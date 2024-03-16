console.log("projects");

import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.css';

const btnNext = document.querySelector('.projects_slider_btn--right');
const btnPrev = document.querySelector('.projects_slider_btn--left');

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});

btnNext.addEventListener('click', () => { swiper.slideNext() });
btnPrev.addEventListener('click', () => { swiper.slidePrev() });



