// 'use strict';

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';

// Swiper.use([Navigation, Pagination]);

// const URL = 'https://portfolio-js.b.goit.study/api/reviews';
// const list = document.querySelector('.reviews-list');

// fetch(URL)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     list.innerHTML = renderCard(data);

//     const swiper = new Swiper('.swiper', {
//       direction: 'horizontal',
//       updateOnWindowResize: true,
//       slidesPerView: 1,
//       enabled: true,
//       swipeHandler: '.reviews-list-item',
//       speed: 300,

//       breakpoints: {
//         768: {
//           slidesPerView: 2,
//           slidesPerGroup: 1,
//           spaceBetween: 16,
//         },

//         1440: {
//           slidesPerView: 4,
//           slidesPerGroup: 1,
//           spaceBetween: 18,
//         },
//       },

//       navigation: {
//         prevEl: '.reviews-btn-left',
//         nextEl: '.reviews-btn-right',
//         preventClicks: false,
//       },
//     });
//   })
//   .catch(error => console.log(error));

// function renderCard(card) {
//   return card
//     .map(({ avatar_url, _id, author, review }) => {
//       return `
//         <li class="reviews-list-item swiper-slide">
//           <img
//             class="reviews-item-img"
//             src="${avatar_url}"
//             alt="${_id}"
//             width="48"
//             height="48"
//             loading="lazy"
//           />
//           <h3 class="reviews-item-title">${author}</h3>
//           <p class="reviews-item-text">${review}</p>
//         </li>`;
//     })
//     .join('');
// }