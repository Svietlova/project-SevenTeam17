import{S as d,N as w,K as y,M as h,A as L,P as x}from"./assets/vendor-abae9dae.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=i(r);fetch(r.href,e)}})();(()=>{const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),o=document.querySelector(".mobile-menu"),r=document.querySelector(".header-order-btn"),e=()=>{const n=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")};s.addEventListener("click",e),i.addEventListener("click",e),o.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();const S=document.querySelector(".menu-title");S.addEventListener("click",()=>{document.querySelector(".header-list").classList.toggle("hidden")});const j=document.querySelectorAll(".accordion-header"),q=document.querySelector(".accordion-panel"),A=document.querySelector(".about-ac"),E=document.querySelector(".mobile-open-ac");q.style.maxHeight="100%";A.classList.add("active");E.style.transform="rotate(180deg)";j.forEach(t=>{t.addEventListener("click",function(){const s=this.closest(".about-ac"),i=s.querySelector(".accordion-panel"),o=this.querySelector(".mobile-open-ac");s.classList.toggle("active"),s.classList.contains("active")?(i.style.maxHeight=i.scrollHeight+"px",o.style.transform="rotate(180deg)"):(i.style.maxHeight="0",o.style.transform="rotate(0deg)")})});new d(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[w,y,h],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});const $="/project-SevenTeam17/assets/image1.11px-bb988309.png",P="/project-SevenTeam17/assets/image1.12px-111ca135.png",m="/project-SevenTeam17/assets/image1.21px-daf377c0.png",T="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",M="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",_="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",g="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",B="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",N="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",k="/project-SevenTeam17/assets/image3.12px-6322b368.png",f="/project-SevenTeam17/assets/image3.21px-356430ed.png",V="/project-SevenTeam17/assets/image3.22px-e3ae8908.png",H=document.querySelector(".projects_slider_btn--right"),O=document.querySelector(".projects_slider_btn--left"),b=new d(".projects_image_box",{speed:400,spaceBetween:100});O.addEventListener("click",()=>{R(),b.slidePrev()});H.addEventListener("click",()=>{I(),b.slideNext()});const z=document.querySelector(".projects_wrapper"),C=`
  <div class="swiper-slide projects-slide" id=1>
    <img
      class="projects_image" 
      srcset="
        ${$}  292w,
        ${P}  584w,
        ${m}  528w,
        ${T}  1056w
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
              ${M}  292w,
              ${_}  584w,
              ${g}  528w,
              ${B}  1056w
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
        ${N}  292w,
        ${k}  584w,
        ${f}  528w,
        ${V}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${f}"
      alt="Vocab Builder App"
    />
  </div>`;z.insertAdjacentHTML("beforeend",C);const c=document.querySelectorAll(".projects-slide"),a=document.querySelector(".projects_slider_btn--right"),l=document.querySelector(".projects_slider_btn--left");function I(){for(let t=0;t<=c.length-1;t++)c[0].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled"),console.log("disable left btn")),c[2].classList.contains("swiper-slide-next")&&(a.classList.toggle("inActive"),a.setAttribute("disabled","true"))}function R(){c[2].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),c[0].classList.contains("swiper-slide-prev")&&(l.classList.toggle("inActive"),l.setAttribute("disbled","true"))}const F=document.querySelector(".accordion-container");new L(F,{duration:400,showMultiple:!0});d.use([w,x]);const K="https://portfolio-js.b.goit.study/api/reviews",G=document.querySelector(".reviews-list");fetch(K).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{G.innerHTML=W(t),new d(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function W(t){return t.map(({avatar_url:s,_id:i,author:o,review:r})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${s}"
            alt="${i}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${o}</h3>
          <p class="reviews-item-text">${r}</p>
        </li>`).join("")}function D(t){const s=t.parentNode;s.classList.contains("success")&&(s.querySelector(".success-label").remove(),s.classList.remove("success"))}function J(t){const s=t.parentNode,i=document.createElement("label");i.classList.add("success-label"),i.textContent="Success",D(t),s.append(i),s.classList.add("success")}function U(t){function s(e){const n=e.parentNode;n.classList.contains("error")&&(n.querySelector(".error-label").remove(),n.classList.remove("error"))}function i(e,n){const u=e.parentNode,p=document.createElement("label");p.classList.add("error-label"),p.textContent=n,u.append(p),u.classList.add("error")}const o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;let r=!0;return t.querySelectorAll("input").forEach(e=>{e.dataset.required=="true"&&(e.value==""?(s(e),i(e,"This field is required"),r=!1):e.type==="email"&&!o.test(e.value)?(s(e),i(e,"Invalid email, try again"),r=!1):(s(e),J(e)))}),r}const v=document.querySelector(".footer-form");v.addEventListener("submit",t=>{t.preventDefault(),U(v)==!0&&console.log("Form validated successfully")});
//# sourceMappingURL=commonHelpers.js.map
