import{S as p,N as w,P as f}from"./assets/vendor-558913cf.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();console.log("header");(()=>{const t=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const e=i.getAttribute("aria-expanded")==="true"||!1;i.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const s=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};i.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();console.log("hero");console.log("benefits");const v="/project-SevenTeam17/assets/image1.11px-bb988309.png",b="/project-SevenTeam17/assets/image1.12px-111ca135.png",d="/project-SevenTeam17/assets/image1.21px-daf377c0.png",h="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",x="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",y="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",m="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",S="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",j="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",L="/project-SevenTeam17/assets/image3.12px-6322b368.png",u="/project-SevenTeam17/assets/image3.21px-356430ed.png",$="/project-SevenTeam17/assets/image3.22px-e3ae8908.png";console.log("projects");const A=document.querySelector(".projects_slider_btn--right"),P=document.querySelector(".projects_slider_btn--left"),g=new p(".projects_image_box",{speed:400,spaceBetween:100});P.addEventListener("click",()=>{q(),g.slidePrev()});A.addEventListener("click",()=>{_(),g.slideNext()});const T=document.querySelector(".swiper-wrapper"),B=`
  <div class="swiper-slide" id=1>
    <img
      class="projects_image" 
      srcset="
        ${v}  292w,
        ${b}  584w,
        ${d}  528w,
        ${h}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${d}"
      alt="Read Jorney App"
    />
  </div>
  <div class="swiper-slide" id="2">
          <img
            class="projects_image"
            srcset="
              ${x}  292w,
              ${y}  584w,
              ${m}  528w,
              ${S}  1056w
            "
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${m}"
            alt="Pet Love App"
          />
        </div>
  <div class="swiper-slide" id=3>
    <img
      class="projects_image" 
      srcset="
        ${j}  292w,
        ${L}  584w,
        ${u}  528w,
        ${$}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${u}"
      alt="Read Jorney App"
    />
  </div>`;T.insertAdjacentHTML("beforeend",B);const r=document.querySelectorAll(".swiper-slide"),c=document.querySelector(".projects_slider_btn--right"),l=document.querySelector(".projects_slider_btn--left");function _(){for(let t=0;t<=r.length-1;t++)r[0].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled"),console.log("disable left btn")),r[2].classList.contains("swiper-slide-next")&&(c.classList.toggle("inActive"),c.setAttribute("disabled","true"))}function q(){r[2].classList.contains("swiper-slide-active")&&(c.classList.toggle("inActive"),c.removeAttribute("disabled")),r[0].classList.contains("swiper-slide-prev")&&(l.classList.toggle("inActive"),l.setAttribute("disbled","true"))}console.log("faq");p.use([w,f]);const M="https://portfolio-js.b.goit.study/api/reviews",E=document.querySelector(".reviews-list");fetch(M).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{E.innerHTML=O(t),new p(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function O(t){return t.map(({avatar_url:i,_id:o,author:n,review:e})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${i}"
            alt="${o}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${n}</h3>
          <p class="reviews-item-text">${e}</p>
        </li>`).join("")}console.log("work together");
//# sourceMappingURL=commonHelpers.js.map
