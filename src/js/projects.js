`use strict`;
import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.css';

import p111 from '../img/projects/image1.11px.png'
import p112 from '../img/projects/image1.12px.png'
import p121 from '../img/projects/image1.21px.png'
import p122 from '../img/projects/image1.22px.png'

import p211 from '../img/projects/image2.11px.png'
import p212 from '../img/projects/image2.12px.png'
import p221 from '../img/projects/image2.21px.png'
import p222 from '../img/projects/image2.22px.png'

import p311 from '../img/projects/image3.11px.png'
import p312 from '../img/projects/image3.12px.png'
import p321 from '../img/projects/image3.21px.png'
import p322 from '../img/projects/image3.22px.png'


const btnNext = document.querySelector('.projects_slider_btn--right');
const btnPrev = document.querySelector('.projects_slider_btn--left');


const swiper = new Swiper('.projects_box', {
  speed: 400,
  spaceBetween: 100,
});


btnPrev.addEventListener('click', () => {
  disableBtn();
  swiper.slidePrev()
});

btnNext.addEventListener('click', () => {
  enableBtn();
  swiper.slideNext()
});


const swiperBox = document.querySelector('.projects_wrapper');
const projectsImg = `
  <li class="swiper-slide projects-slide" id=1>
    <div class="projects_description_box">
        <ul class="projects_tag_list">
          <li class="projects_tag">#react</li>
          <li class="projects_tag">#js</li>
          <li class="projects_tag">#node js</li>
          <li class="projects_tag">#git</li>
        </ul>
        <p class="projects_description">
          Programming Across <br />Borders: Ideas,<br />Technologies,
          Innovations
        </p>
        <a
          href="https://svietlova.github.io/project-SevenTeam17/"
          target="_blank"
        >
          <button class="projects_description_btn">See projects</button>
        </a>
    </div>
    <img
      class="projects_image" 
      srcset="
        ${p111}  292w,
        ${p112}  584w,
        ${p121}  528w,
        ${p122}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${p121}"
      alt="Read Jorney App"
    />
  </li>
  <li class="swiper-slide projects-slide" id="2">
    <div class="projects_description_box">
        <ul class="projects_tag_list">
          <li class="projects_tag">#react</li>
          <li class="projects_tag">#js</li>
          <li class="projects_tag">#node js</li>
          <li class="projects_tag">#git</li>
        </ul>
        <p class="projects_description">
          Programming Across <br />Borders: Ideas,<br />Technologies,
          Innovations
        </p>
        <a
          href="https://svietlova.github.io/project-SevenTeam17/"
          target="_blank"
        >
          <button class="projects_description_btn">See projects</button>
        </a>
    </div>
          <img
            class="projects_image"
            srcset="
              ${p211}  292w,
              ${p212}  584w,
              ${p221}  528w,
              ${p222}  1056w
            "
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${p221}"
            alt="Pet Love App"
          />
  </li>
  <li class="swiper-slide projects-slide" id=3>
   <div class="projects_description_box">
        <ul class="projects_tag_list">
          <li class="projects_tag">#react</li>
          <li class="projects_tag">#js</li>
          <li class="projects_tag">#node js</li>
          <li class="projects_tag">#git</li>
        </ul>
        <p class="projects_description">
          Programming Across <br />Borders: Ideas,<br />Technologies,
          Innovations
        </p>
        <a
          href="https://svietlova.github.io/project-SevenTeam17/"
          target="_blank"
        >
          <button class="projects_description_btn">See projects</button>
        </a>
    </div>
    <img
      class="projects_image" 
      srcset="
        ${p311}  292w,
        ${p312}  584w,
        ${p321}  528w,
        ${p322}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${p321}"
      alt="Vocab Builder App"
    />
  </li>`

swiperBox.insertAdjacentHTML('beforeend', projectsImg);



const slides = document.querySelectorAll('.projects-slide');
const swiperBtnRight = document.querySelector('.projects_slider_btn--right');
const swiperBtnLeft = document.querySelector('.projects_slider_btn--left');

function enableBtn() {
  for (let i = 0; i <= slides.length - 1; i++) {
    if (slides[0].classList.contains('swiper-slide-active')) {
      swiperBtnLeft.classList.toggle("inActive");
      swiperBtnLeft.removeAttribute("disabled");
      console.log("disable left btn")
    }
    if (slides[2].classList.contains('swiper-slide-next')) {
      swiperBtnRight.classList.toggle("inActive");
      swiperBtnRight.setAttribute("disabled", "true");
    }

  }
}
function disableBtn() {
  if (slides[2].classList.contains('swiper-slide-active')) {
    swiperBtnRight.classList.toggle("inActive");
    swiperBtnRight.removeAttribute("disabled");
  }
  if (slides[0].classList.contains('swiper-slide-prev')) {
    swiperBtnLeft.classList.toggle("inActive");
    swiperBtnLeft.setAttribute("disbled", "true");
  }
}


