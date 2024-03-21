`use strict`;
/**
  |============================
  | Mobile menu
  |============================
*/

(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const menuLinks = document.querySelector(".mobile-menu");
    const orderBtn = document.querySelector(".header-order-btn");
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    menuLinks.addEventListener('click', toggleMenu);
    orderBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
    });
  })();
  
  /**
    |============================
    | Tablet/desctop menu
    |============================
  */

const tabMenu = document.querySelector('.menu-title');
tabMenu.addEventListener('click', () => {
  let tabMenuList = document.querySelector('.header-list');
  tabMenuList.classList.toggle('hidden');

});
