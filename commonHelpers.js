import{S as a,N as g,P as m}from"./assets/vendor-558913cf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();console.log("header");(()=>{const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=()=>{const e=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const i=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](document.body)};s.addEventListener("click",r),o.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();console.log("hero");console.log("benefits");console.log("projects");const u=document.querySelector(".projects_slider_btn--right"),w=document.querySelector(".projects_slider_btn--left"),d=new a(".swiper",{speed:400,spaceBetween:100});w.addEventListener("click",()=>{v(),d.slidePrev()});u.addEventListener("click",()=>{b(),d.slideNext()});const f=document.querySelector(".swiper-wrapper"),x=`
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
  </div>`;f.insertAdjacentHTML("beforeend",x);const n=document.querySelectorAll(".swiper-slide"),c=document.querySelector(".projects_slider_btn--right"),l=document.querySelector(".projects_slider_btn--left");function b(){for(let t=0;t<=n.length-1;t++)n[0].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled"),console.log("disable left btn")),n[2].classList.contains("swiper-slide-next")&&(c.classList.toggle("inActive"),c.setAttribute("disabled","true"))}function v(){n[2].classList.contains("swiper-slide-active")&&(c.classList.toggle("inActive"),c.removeAttribute("disabled")),n[0].classList.contains("swiper-slide-prev")&&(l.classList.toggle("inActive"),l.setAttribute("disbled","true"))}console.log("faq");a.use([g,m]);const h="https://portfolio-js.b.goit.study/api/reviews",y=document.querySelector(".reviews-list");fetch(h).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{y.innerHTML=j(t),new a(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function j(t){return t.map(({avatar_url:s,_id:o,author:r,review:e})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${s}"
            alt="${o}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${r}</h3>
          <p class="reviews-item-text">${e}</p>
        </li>`).join("")}console.log("work together");
//# sourceMappingURL=commonHelpers.js.map
