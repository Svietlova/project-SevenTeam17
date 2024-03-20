import{A as g,S as d,N as v,P as b}from"./assets/vendor-f0d653de.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();console.log("header");(()=>{const t=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=document.querySelector(".mobile-menu"),e=document.querySelector(".header-order-btn"),s=()=>{const n=i.getAttribute("aria-expanded")==="true"||!1;i.setAttribute("aria-expanded",!n),t.classList.toggle("is-open");const f=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[f](document.body)};i.addEventListener("click",s),r.addEventListener("click",s),o.addEventListener("click",s),e.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(t.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();console.log("hero");new g(".about-me-acc-sec");console.log("benefits");const h="/project-SevenTeam17/assets/image1.11px-bb988309.png",x="/project-SevenTeam17/assets/image1.12px-111ca135.png",p="/project-SevenTeam17/assets/image1.21px-daf377c0.png",j="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",y="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",S="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",u="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",L="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",A="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",$="/project-SevenTeam17/assets/image3.12px-6322b368.png",m="/project-SevenTeam17/assets/image3.21px-356430ed.png",q="/project-SevenTeam17/assets/image3.22px-e3ae8908.png";console.log("projects");const B=document.querySelector(".projects_slider_btn--right"),P=document.querySelector(".projects_slider_btn--left"),w=new d(".projects_image_box",{speed:400,spaceBetween:100});P.addEventListener("click",()=>{M(),w.slidePrev()});B.addEventListener("click",()=>{E(),w.slideNext()});const T=document.querySelector(".projects_wrapper"),_=`
  <div class="swiper-slide projects-slide" id=1>
    <img
      class="projects_image" 
      srcset="
        ${h}  292w,
        ${x}  584w,
        ${p}  528w,
        ${j}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${p}"
      alt="Read Jorney App"
    />
  </div>
  <div class="swiper-slide projects-slide" id="2">
          <img
            class="projects_image"
            srcset="
              ${y}  292w,
              ${S}  584w,
              ${u}  528w,
              ${L}  1056w
            "
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${u}"
            alt="Pet Love App"
          />
        </div>
  <div class="swiper-slide projects-slide" id=3>
    <img
      class="projects_image" 
      srcset="
        ${A}  292w,
        ${$}  584w,
        ${m}  528w,
        ${q}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${m}"
      alt="Vocab Builder App"
    />
  </div>`;T.insertAdjacentHTML("beforeend",_);const c=document.querySelectorAll(".projects-slide"),l=document.querySelector(".projects_slider_btn--right"),a=document.querySelector(".projects_slider_btn--left");function E(){for(let t=0;t<=c.length-1;t++)c[0].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled"),console.log("disable left btn")),c[2].classList.contains("swiper-slide-next")&&(l.classList.toggle("inActive"),l.setAttribute("disabled","true"))}function M(){c[2].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled")),c[0].classList.contains("swiper-slide-prev")&&(a.classList.toggle("inActive"),a.setAttribute("disbled","true"))}console.log("faq");const k=document.querySelector(".accordion-container");new g(k,{duration:400,showMultiple:!0});d.use([v,b]);const O="https://portfolio-js.b.goit.study/api/reviews",N=document.querySelector(".reviews-list");fetch(O).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{N.innerHTML=z(t),new d(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function z(t){return t.map(({avatar_url:i,_id:r,author:o,review:e})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${i}"
            alt="${r}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${o}</h3>
          <p class="reviews-item-text">${e}</p>
        </li>`).join("")}console.log("work together");
//# sourceMappingURL=commonHelpers.js.map
