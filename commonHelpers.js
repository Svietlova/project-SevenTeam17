import{A as w,S as p,N as b,K as S,M as y,P as h}from"./assets/vendor-7e83206a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=i(r);fetch(r.href,e)}})();console.log("header");(()=>{const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),n=document.querySelector(".mobile-menu"),r=document.querySelector(".header-order-btn"),e=()=>{const o=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!o),t.classList.toggle("is-open");const l=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};s.addEventListener("click",e),i.addEventListener("click",e),n.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const x=document.querySelector(".menu-title");x.addEventListener("click",()=>{document.querySelector(".header-list").classList.toggle("hidden")});console.log("hero");new w(".about-me-acc-sec");document.querySelector(".about-swiper-button").addEventListener("click",()=>{const t=document.querySelector(".swiper-slide.active"),s=t.nextElementSibling;if(s)t.classList.remove("active"),s.classList.add("active");else{const i=document.querySelector(".swiper-slide");t.classList.remove("active"),i.classList.add("active")}});new p(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[b,S,y],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});console.log("benefits");const j="/project-SevenTeam17/assets/image1.11px-bb988309.png",q="/project-SevenTeam17/assets/image1.12px-111ca135.png",m="/project-SevenTeam17/assets/image1.21px-daf377c0.png",A="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",E="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",$="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",g="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",P="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",B="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",M="/project-SevenTeam17/assets/image3.12px-6322b368.png",v="/project-SevenTeam17/assets/image3.21px-356430ed.png",T="/project-SevenTeam17/assets/image3.22px-e3ae8908.png";console.log("projects");const _=document.querySelector(".projects_slider_btn--right"),k=document.querySelector(".projects_slider_btn--left"),L=new p(".projects_image_box",{speed:400,spaceBetween:100});k.addEventListener("click",()=>{z(),L.slidePrev()});_.addEventListener("click",()=>{O(),L.slideNext()});const N=document.querySelector(".projects_wrapper"),V=`
  <div class="swiper-slide projects-slide" id=1>
    <img
      class="projects_image" 
      srcset="
        ${j}  292w,
        ${q}  584w,
        ${m}  528w,
        ${A}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${m}"
      alt="Read Jorney App"
    />
  </div>
  <div class="swiper-slide projects-slide" id="2">
          <img
            class="projects_image"
            srcset="
              ${E}  292w,
              ${$}  584w,
              ${g}  528w,
              ${P}  1056w
            "
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${g}"
            alt="Pet Love App"
          />
        </div>
  <div class="swiper-slide projects-slide" id=3>
    <img
      class="projects_image" 
      srcset="
        ${B}  292w,
        ${M}  584w,
        ${v}  528w,
        ${T}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${v}"
      alt="Vocab Builder App"
    />
  </div>`;N.insertAdjacentHTML("beforeend",V);const c=document.querySelectorAll(".projects-slide"),a=document.querySelector(".projects_slider_btn--right"),d=document.querySelector(".projects_slider_btn--left");function O(){for(let t=0;t<=c.length-1;t++)c[0].classList.contains("swiper-slide-active")&&(d.classList.toggle("inActive"),d.removeAttribute("disabled"),console.log("disable left btn")),c[2].classList.contains("swiper-slide-next")&&(a.classList.toggle("inActive"),a.setAttribute("disabled","true"))}function z(){c[2].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),c[0].classList.contains("swiper-slide-prev")&&(d.classList.toggle("inActive"),d.setAttribute("disbled","true"))}console.log("faq");const C=document.querySelector(".accordion-container");new w(C,{duration:400,showMultiple:!0});p.use([b,h]);const R="https://portfolio-js.b.goit.study/api/reviews",I=document.querySelector(".reviews-list");fetch(R).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{I.innerHTML=F(t),new p(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function F(t){return t.map(({avatar_url:s,_id:i,author:n,review:r})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${s}"
            alt="${i}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${n}</h3>
          <p class="reviews-item-text">${r}</p>
        </li>`).join("")}console.log("work together");function H(t){const s=t.parentNode;s.classList.contains("success")&&(s.querySelector(".success-label").remove(),s.classList.remove("success"))}function K(t){const s=t.parentNode,i=document.createElement("label");i.classList.add("success-label"),i.textContent="Success",H(t),s.append(i),s.classList.add("success")}function G(t){function s(e){const o=e.parentNode;o.classList.contains("error")&&(o.querySelector(".error-label").remove(),o.classList.remove("error"))}function i(e,o){const l=e.parentNode,u=document.createElement("label");u.classList.add("error-label"),u.textContent=o,l.append(u),l.classList.add("error")}const n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;let r=!0;return t.querySelectorAll("input").forEach(e=>{e.dataset.required=="true"&&(e.value==""?(s(e),i(e,"This field is required"),r=!1):e.type==="email"&&!n.test(e.value)?(s(e),i(e,"Invalid email, try again"),r=!1):(s(e),K(e)))}),r}const f=document.querySelector(".footer-form");f.addEventListener("submit",t=>{t.preventDefault(),G(f)==!0&&console.log("Form validated successfully")});
//# sourceMappingURL=commonHelpers.js.map
