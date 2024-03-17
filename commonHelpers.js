import{S as d}from"./assets/vendor-0cdf484e.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&p(n)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();console.log("header");console.log("hero");console.log("about-me");console.log("benefits");console.log("projects");const a=document.querySelector(".projects_slider_btn--right"),m=document.querySelector(".projects_slider_btn--left"),l=new d(".swiper",{speed:400,spaceBetween:100});m.addEventListener("click",()=>{x(),l.slidePrev()});a.addEventListener("click",()=>{w(),l.slideNext()});const u=document.querySelector(".swiper-wrapper"),f=`
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
  </div>`;u.insertAdjacentHTML("beforeend",f);const s=document.querySelectorAll(".swiper-slide"),i=document.querySelector(".projects_slider_btn--right"),r=document.querySelector(".projects_slider_btn--left");function w(){for(let o=0;o<=s.length-1;o++)s[0].classList.contains("swiper-slide-active")&&(r.classList.toggle("inActive"),r.removeAttribute("disabled"),console.log("disable left btn")),s[2].classList.contains("swiper-slide-next")&&(i.classList.toggle("inActive"),i.setAttribute("disabled","true"))}function x(){s[2].classList.contains("swiper-slide-active")&&(i.classList.toggle("inActive"),i.removeAttribute("disabled")),s[0].classList.contains("swiper-slide-prev")&&(r.classList.toggle("inActive"),r.setAttribute("disbled","true"))}console.log("faq");console.log("work together");
//# sourceMappingURL=commonHelpers.js.map
