import{S as d,N as f,K as j,M as h,A as y,P as S}from"./assets/vendor-abae9dae.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(r){if(r.ep)return;r.ep=!0;const e=i(r);fetch(r.href,e)}})();(()=>{const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),c=document.querySelector(".mobile-menu"),r=document.querySelector(".header-order-btn"),e=()=>{const o=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")};s.addEventListener("click",e),i.addEventListener("click",e),c.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();const x=document.querySelector(".menu-title");x.addEventListener("click",t=>{t.preventDefault(),document.querySelector(".header-list").classList.toggle("hidden")});const _=document.querySelectorAll(".accordion-header"),L=document.querySelector(".accordion-panel"),q=document.querySelector(".about-ac"),A=document.querySelector(".mobile-open-ac");L.style.maxHeight="100%";q.classList.add("active");A.style.transform="rotate(180deg)";_.forEach(t=>{t.addEventListener("click",function(){const s=this.closest(".about-ac"),i=s.querySelector(".accordion-panel"),c=this.querySelector(".mobile-open-ac");s.classList.toggle("active"),s.classList.contains("active")?(i.style.maxHeight=i.scrollHeight+"px",c.style.transform="rotate(180deg)"):(i.style.maxHeight="0",c.style.transform="rotate(0deg)")})});new d(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[f,j,h],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});const P="/project-SevenTeam17/assets/image1.11px-bb988309.png",T="/project-SevenTeam17/assets/image1.12px-111ca135.png",m="/project-SevenTeam17/assets/image1.21px-daf377c0.png",E="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",$="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",B="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",g="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",M="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",k="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",I="/project-SevenTeam17/assets/image3.12px-6322b368.png",b="/project-SevenTeam17/assets/image3.21px-356430ed.png",N="/project-SevenTeam17/assets/image3.22px-e3ae8908.png",V=document.querySelector(".projects_slider_btn--right"),H=document.querySelector(".projects_slider_btn--left"),w=new d(".projects_box",{speed:400,spaceBetween:100});H.addEventListener("click",()=>{R(),w.slidePrev()});V.addEventListener("click",()=>{C(),w.slideNext()});const O=document.querySelector(".projects_wrapper"),z=`
  <li class="swiper-slide projects-slide" id=1>
    <div class="projects_description_box">
        <ul class="projects_tag_list">
          <li class="projects_tag">#react</li>
          <li class="projects_tag">#js</li>
          <li class="projects_tag">#node js</li>
          <li class="projects_tag">#git</li>
        </ul>
        <p class="projects_description">
          Programming Across <br />Borders: Ideas,<br />Technologies,
          Innovations
        </p>
        <a
          href="https://svietlova.github.io/project-SevenTeam17/"
          target="_blank"
        >
          <button class="projects_description_btn">See projects</button>
        </a>
    </div>
    <img
      class="projects_image" 
      srcset="
        ${P}  292w,
        ${T}  584w,
        ${m}  528w,
        ${E}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${m}"
      alt="Read Jorney App"
    />
  </li>
  <li class="swiper-slide projects-slide" id="2">
    <div class="projects_description_box">
        <ul class="projects_tag_list">
          <li class="projects_tag">#react</li>
          <li class="projects_tag">#js</li>
          <li class="projects_tag">#node js</li>
          <li class="projects_tag">#git</li>
        </ul>
        <p class="projects_description">
          Programming Across <br />Borders: Ideas,<br />Technologies,
          Innovations
        </p>
        <a
          href="https://svietlova.github.io/project-SevenTeam17/"
          target="_blank"
        >
          <button class="projects_description_btn">See projects</button>
        </a>
    </div>
          <img
            class="projects_image"
            srcset="
              ${$}  292w,
              ${B}  584w,
              ${g}  528w,
              ${M}  1056w
            "
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${g}"
            alt="Pet Love App"
          />
  </li>
  <li class="swiper-slide projects-slide" id=3>
   <div class="projects_description_box">
        <ul class="projects_tag_list">
          <li class="projects_tag">#react</li>
          <li class="projects_tag">#js</li>
          <li class="projects_tag">#node js</li>
          <li class="projects_tag">#git</li>
        </ul>
        <p class="projects_description">
          Programming Across <br />Borders: Ideas,<br />Technologies,
          Innovations
        </p>
        <a
          href="https://svietlova.github.io/project-SevenTeam17/"
          target="_blank"
        >
          <button class="projects_description_btn">See projects</button>
        </a>
    </div>
    <img
      class="projects_image" 
      srcset="
        ${k}  292w,
        ${I}  584w,
        ${b}  528w,
        ${N}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${b}"
      alt="Vocab Builder App"
    />
  </li>`;O.insertAdjacentHTML("beforeend",z);const n=document.querySelectorAll(".projects-slide"),a=document.querySelector(".projects_slider_btn--right"),l=document.querySelector(".projects_slider_btn--left");function C(){for(let t=0;t<=n.length-1;t++)n[0].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled"),console.log("disable left btn")),n[2].classList.contains("swiper-slide-next")&&(a.classList.toggle("inActive"),a.setAttribute("disabled","true"))}function R(){n[2].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),n[0].classList.contains("swiper-slide-prev")&&(l.classList.toggle("inActive"),l.setAttribute("disbled","true"))}const F=document.querySelector(".accordion-container");new y(F,{duration:400,showMultiple:!0});d.use([f,S]);const K="https://portfolio-js.b.goit.study/api/reviews",D=document.querySelector(".reviews-list");fetch(K).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{D.innerHTML=G(t),new d(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function G(t){return t.map(({avatar_url:s,_id:i,author:c,review:r})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${s}"
            alt="${i}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${c}</h3>
          <p class="reviews-item-text">${r}</p>
        </li>`).join("")}function W(t){const s=t.parentNode;s.classList.contains("success")&&(s.querySelector(".success-label").remove(),s.classList.remove("success"))}function J(t){const s=t.parentNode,i=document.createElement("label");i.classList.add("success-label"),i.textContent="Success",W(t),s.append(i),s.classList.add("success")}function U(t){function s(e){const o=e.parentNode;o.classList.contains("error")&&(o.querySelector(".error-label").remove(),o.classList.remove("error"))}function i(e,o){const u=e.parentNode,p=document.createElement("label");p.classList.add("error-label"),p.textContent=o,u.append(p),u.classList.add("error")}const c=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;let r=!0;return t.querySelectorAll("input").forEach(e=>{e.dataset.required=="true"&&(e.value==""?(s(e),i(e,"This field is required"),r=!1):e.type==="email"&&!c.test(e.value)?(s(e),i(e,"Invalid email, try again"),r=!1):(s(e),J(e)))}),r}const v=document.querySelector(".footer-form");v.addEventListener("submit",t=>{t.preventDefault(),U(v)==!0&&console.log("Form validated successfully")});
//# sourceMappingURL=commonHelpers.js.map
