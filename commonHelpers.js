import{A as v,S as u,N as b,P as h}from"./assets/vendor-f0d653de.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(s){if(s.ep)return;s.ep=!0;const e=i(s);fetch(s.href,e)}})();console.log("header");(()=>{const t=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),n=document.querySelector(".mobile-menu"),s=document.querySelector(".header-order-btn"),e=()=>{const o=r.getAttribute("aria-expanded")==="true"||!1;r.setAttribute("aria-expanded",!o),t.classList.toggle("is-open");const l=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};r.addEventListener("click",e),i.addEventListener("click",e),n.addEventListener("click",e),s.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();console.log("hero");new v(".about-me-acc-sec");console.log("benefits");const L="/project-SevenTeam17/assets/image1.11px-bb988309.png",x="/project-SevenTeam17/assets/image1.12px-111ca135.png",m="/project-SevenTeam17/assets/image1.21px-daf377c0.png",y="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",S="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",j="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",g="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",q="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",A="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",$="/project-SevenTeam17/assets/image3.12px-6322b368.png",f="/project-SevenTeam17/assets/image3.21px-356430ed.png",E="/project-SevenTeam17/assets/image3.22px-e3ae8908.png";console.log("projects");const B=document.querySelector(".projects_slider_btn--right"),T=document.querySelector(".projects_slider_btn--left"),w=new u(".projects_image_box",{speed:400,spaceBetween:100});T.addEventListener("click",()=>{N(),w.slidePrev()});B.addEventListener("click",()=>{M(),w.slideNext()});const P=document.querySelector(".projects_wrapper"),_=`
  <div class="swiper-slide projects-slide" id=1>
    <img
      class="projects_image" 
      srcset="
        ${L}  292w,
        ${x}  584w,
        ${m}  528w,
        ${y}  1056w
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
              ${S}  292w,
              ${j}  584w,
              ${g}  528w,
              ${q}  1056w
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
        ${A}  292w,
        ${$}  584w,
        ${f}  528w,
        ${E}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${f}"
      alt="Vocab Builder App"
    />
  </div>`;P.insertAdjacentHTML("beforeend",_);const c=document.querySelectorAll(".projects-slide"),a=document.querySelector(".projects_slider_btn--right"),d=document.querySelector(".projects_slider_btn--left");function M(){for(let t=0;t<=c.length-1;t++)c[0].classList.contains("swiper-slide-active")&&(d.classList.toggle("inActive"),d.removeAttribute("disabled"),console.log("disable left btn")),c[2].classList.contains("swiper-slide-next")&&(a.classList.toggle("inActive"),a.setAttribute("disabled","true"))}function N(){c[2].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),c[0].classList.contains("swiper-slide-prev")&&(d.classList.toggle("inActive"),d.setAttribute("disbled","true"))}console.log("faq");const k=document.querySelector(".accordion-container");new v(k,{duration:400,showMultiple:!0});u.use([b,h]);const O="https://portfolio-js.b.goit.study/api/reviews",z=document.querySelector(".reviews-list");fetch(O).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{z.innerHTML=F(t),new u(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function F(t){return t.map(({avatar_url:r,_id:i,author:n,review:s})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${r}"
            alt="${i}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${n}</h3>
          <p class="reviews-item-text">${s}</p>
        </li>`).join("")}console.log("work together");function R(t){const r=t.parentNode;r.classList.contains("success")&&(r.querySelector(".success-label").remove(),r.classList.remove("success"))}function C(t){const r=t.parentNode,i=document.createElement("label");i.classList.add("success-label"),i.textContent="Success",R(t),r.append(i),r.classList.add("success")}function V(t){function r(e){const o=e.parentNode;o.classList.contains("error")&&(o.querySelector(".error-label").remove(),o.classList.remove("error"))}function i(e,o){const l=e.parentNode,p=document.createElement("label");p.classList.add("error-label"),p.textContent=o,l.append(p),l.classList.add("error")}const n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;let s=!0;return t.querySelectorAll("input").forEach(e=>{e.dataset.required=="true"&&(e.value==""?(r(e),i(e,"This field is required"),s=!1):e.type==="email"&&!n.test(e.value)?(r(e),i(e,"Invalid email, try again"),s=!1):(r(e),C(e)))}),s}footerForm=document.querySelector(".footer-form");footerForm.addEventListener("submit",t=>{t.preventDefault(),V(footerForm)==!0&&console.log("Form validated successfully")});
//# sourceMappingURL=commonHelpers.js.map
