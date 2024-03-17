import{S as a}from"./assets/vendor-0cdf484e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();console.log("header");(()=>{const i=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),o=()=>{const e=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!e),i.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};s.addEventListener("click",o),l.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(i.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();console.log("hero");console.log("about-me");console.log("benefits");console.log("projects");const g=document.querySelector(".projects_slider_btn--right"),m=document.querySelector(".projects_slider_btn--left"),d=new a(".swiper",{speed:400,spaceBetween:100});m.addEventListener("click",()=>{x(),d.slidePrev()});g.addEventListener("click",()=>{w(),d.slideNext()});const u=document.querySelector(".swiper-wrapper"),f=`
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
  </div>`;u.insertAdjacentHTML("beforeend",f);const r=document.querySelectorAll(".swiper-slide"),n=document.querySelector(".projects_slider_btn--right"),c=document.querySelector(".projects_slider_btn--left");function w(){for(let i=0;i<=r.length-1;i++)r[0].classList.contains("swiper-slide-active")&&(c.classList.toggle("inActive"),c.removeAttribute("disabled"),console.log("disable left btn")),r[2].classList.contains("swiper-slide-next")&&(n.classList.toggle("inActive"),n.setAttribute("disabled","true"))}function x(){r[2].classList.contains("swiper-slide-active")&&(n.classList.toggle("inActive"),n.removeAttribute("disabled")),r[0].classList.contains("swiper-slide-prev")&&(c.classList.toggle("inActive"),c.setAttribute("disbled","true"))}console.log("faq");console.log("work together");
//# sourceMappingURL=commonHelpers.js.map
