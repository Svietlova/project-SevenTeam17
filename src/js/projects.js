console.log("projects");

import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.css';


const btnNext = document.querySelector('.projects_slider_btn--right');
const btnPrev = document.querySelector('.projects_slider_btn--left');


const swiper = new Swiper('.swiper', {
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


const swiperBox = document.querySelector('.swiper-wrapper');
const projectsImg = `
  <div class="swiper-slide" id=1>
    <img
      class="projects_image" 
      srcset="
        ../img/projects/image1.11px.png  292w,
        ../img/projects/image1.12px.png  584w,
        ../img/projects/image1.21px.png  528w,
        ../img/projects/image1.22px.png 1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="../img/projects/image1.11px.png"
      alt="Read Jorney App"
    />
  </div>
  <div class="swiper-slide" id=2>
    <img
      class="projects_image" 
      srcset="
        ../img/projects/image2.11px.png  292w,
        ../img/projects/image2.12px.png  584w,
        ../img/projects/image2.21px.png  528w,
        ../img/projects/image2.22px.png 1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="../img/projects/image2.11px.png"
      alt="Read Jorney App"
    />
  </div>
  <div class="swiper-slide" id=3>
    <img
      class="projects_image" 
      srcset="
        ../img/projects/image3.11px.png  292w,
        ../img/projects/image3.12px.png  584w,
        ../img/projects/image3.21px.png  528w,
        ../img/projects/image3.22px.png 1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="../img/projects/image3.11px.png"
      alt="Read Jorney App"
    />
  </div>`

swiperBox.insertAdjacentHTML('beforeend', projectsImg);



const slides = document.querySelectorAll('.swiper-slide');
const swiperBtnRight = document.querySelector('.projects_slider_btn--right');
const swiperBtnLeft = document.querySelector('.projects_slider_btn--left');

function enableBtn() {
  for (let i = 0; i <= slides.length-1; i++) {
    if (slides[0].classList.contains('swiper-slide-active')) {
      swiperBtnLeft.classList.toggle("inActive");
      swiperBtnLeft.removeAttribute("disabled");
      console.log("disable left btn")
    }
    if (slides[2].classList.contains('swiper-slide-next')) {
      swiperBtnRight.classList.toggle("inActive");
      swiperBtnRight.setAttribute("disabled","true");
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


