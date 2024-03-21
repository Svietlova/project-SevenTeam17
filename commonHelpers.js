import{A as f,S as d,N as b,K as h,M as S,P as x}from"./assets/vendor-7e83206a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=i(r);fetch(r.href,e)}})();console.log("header");(()=>{const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),o=document.querySelector(".mobile-menu"),r=document.querySelector(".header-order-btn"),e=()=>{const n=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")};s.addEventListener("click",e),i.addEventListener("click",e),o.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();const y=document.querySelector(".menu-title");y.addEventListener("click",()=>{document.querySelector(".header-list").classList.toggle("hidden")});console.log("hero");new f(".about-me-acc-sec");document.querySelector(".about-swiper-button").addEventListener("click",()=>{const t=document.querySelector(".swiper-slide.active"),s=t.nextElementSibling;if(s)t.classList.remove("active"),s.classList.add("active");else{const i=document.querySelector(".swiper-slide");t.classList.remove("active"),i.classList.add("active")}});new d(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[b,h,S],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});console.log("benefits");const j="/project-SevenTeam17/assets/image1.11px-bb988309.png",q="/project-SevenTeam17/assets/image1.12px-111ca135.png",m="/project-SevenTeam17/assets/image1.21px-daf377c0.png",A="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",E="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",$="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",g="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",P="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",T="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",M="/project-SevenTeam17/assets/image3.12px-6322b368.png",v="/project-SevenTeam17/assets/image3.21px-356430ed.png",_="/project-SevenTeam17/assets/image3.22px-e3ae8908.png";console.log("projects");const B=document.querySelector(".projects_slider_btn--right"),N=document.querySelector(".projects_slider_btn--left"),L=new d(".projects_image_box",{speed:400,spaceBetween:100});N.addEventListener("click",()=>{z(),L.slidePrev()});B.addEventListener("click",()=>{O(),L.slideNext()});const k=document.querySelector(".projects_wrapper"),V=`
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
        ${T}  292w,
        ${M}  584w,
        ${v}  528w,
        ${_}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${v}"
      alt="Vocab Builder App"
    />
  </div>`;k.insertAdjacentHTML("beforeend",V);const c=document.querySelectorAll(".projects-slide"),a=document.querySelector(".projects_slider_btn--right"),l=document.querySelector(".projects_slider_btn--left");function O(){for(let t=0;t<=c.length-1;t++)c[0].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled"),console.log("disable left btn")),c[2].classList.contains("swiper-slide-next")&&(a.classList.toggle("inActive"),a.setAttribute("disabled","true"))}function z(){c[2].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),c[0].classList.contains("swiper-slide-prev")&&(l.classList.toggle("inActive"),l.setAttribute("disbled","true"))}const C=document.querySelector(".accordion-container");new f(C,{duration:400,showMultiple:!0});d.use([b,x]);const R="https://portfolio-js.b.goit.study/api/reviews",I=document.querySelector(".reviews-list");fetch(R).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{I.innerHTML=F(t),new d(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function F(t){return t.map(({avatar_url:s,_id:i,author:o,review:r})=>`
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
        </li>`).join("")}console.log("work together");function H(t){const s=t.parentNode;s.classList.contains("success")&&(s.querySelector(".success-label").remove(),s.classList.remove("success"))}function K(t){const s=t.parentNode,i=document.createElement("label");i.classList.add("success-label"),i.textContent="Success",H(t),s.append(i),s.classList.add("success")}function G(t){function s(e){const n=e.parentNode;n.classList.contains("error")&&(n.querySelector(".error-label").remove(),n.classList.remove("error"))}function i(e,n){const u=e.parentNode,p=document.createElement("label");p.classList.add("error-label"),p.textContent=n,u.append(p),u.classList.add("error")}const o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;let r=!0;return t.querySelectorAll("input").forEach(e=>{e.dataset.required=="true"&&(e.value==""?(s(e),i(e,"This field is required"),r=!1):e.type==="email"&&!o.test(e.value)?(s(e),i(e,"Invalid email, try again"),r=!1):(s(e),K(e)))}),r}const w=document.querySelector(".footer-form");w.addEventListener("submit",t=>{t.preventDefault(),G(w)==!0&&console.log("Form validated successfully")});
//# sourceMappingURL=commonHelpers.js.map
