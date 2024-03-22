import{S as d,N as v,K as j,M as h,A as y,P as S}from"./assets/vendor-abae9dae.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}})();(()=>{const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=document.querySelector(".mobile-menu"),r=document.querySelector(".header-order-link"),e=()=>{const i=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!i),t.classList.toggle("is-open")};s.addEventListener("click",e),o.addEventListener("click",e),c.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{i.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();const x=document.querySelector(".menu-title");x.addEventListener("click",t=>{t.preventDefault(),document.querySelector(".header-list").classList.toggle("hidden")});const _=document.querySelectorAll(".accordion-header"),L=document.querySelector(".accordion-panel"),q=document.querySelector(".about-ac"),A=document.querySelector(".mobile-open-ac");L.style.maxHeight="100%";q.classList.add("active");A.style.transform="rotate(180deg)";_.forEach(t=>{t.addEventListener("click",function(){const s=this.closest(".about-ac"),o=s.querySelector(".accordion-panel"),c=this.querySelector(".mobile-open-ac");s.classList.toggle("active"),s.classList.contains("active")?(o.style.maxHeight=o.scrollHeight+"px",c.style.transform="rotate(180deg)"):(o.style.maxHeight="0",c.style.transform="rotate(0deg)")})});new d(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[v,j,h],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});const E="/project-SevenTeam17/assets/image1.11px-bb988309.png",P="/project-SevenTeam17/assets/image1.12px-111ca135.png",g="/project-SevenTeam17/assets/image1.21px-daf377c0.png",T="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",$="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",B="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",b="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",M="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",k="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",I="/project-SevenTeam17/assets/image3.12px-6322b368.png",f="/project-SevenTeam17/assets/image3.21px-356430ed.png",N="/project-SevenTeam17/assets/image3.22px-e3ae8908.png",O=document.querySelector(".projects_slider_btn--right"),V=document.querySelector(".projects_slider_btn--left"),w=new d(".projects_box",{speed:400,spaceBetween:100});V.addEventListener("click",()=>{F(),w.slidePrev()});O.addEventListener("click",()=>{C(),w.slideNext()});const H=document.querySelector(".projects_wrapper"),z=`
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
        ${E}  292w,
        ${P}  584w,
        ${g}  528w,
        ${T}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${g}"
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
              ${b}  528w,
              ${M}  1056w
            "
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${b}"
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
        ${f}  528w,
        ${N}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${f}"
      alt="Vocab Builder App"
    />
  </li>`;H.insertAdjacentHTML("beforeend",z);const n=document.querySelectorAll(".projects-slide"),a=document.querySelector(".projects_slider_btn--right"),l=document.querySelector(".projects_slider_btn--left");function C(){for(let t=0;t<=n.length-1;t++)n[0].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled"),console.log("disable left btn")),n[2].classList.contains("swiper-slide-next")&&(a.classList.toggle("inActive"),a.setAttribute("disabled","true"))}function F(){n[2].classList.contains("swiper-slide-active")&&(a.classList.toggle("inActive"),a.removeAttribute("disabled")),n[0].classList.contains("swiper-slide-prev")&&(l.classList.toggle("inActive"),l.setAttribute("disbled","true"))}const R=document.querySelector(".accordion-container");new y(R,{duration:600,showMultiple:!0});d.use([v,S]);const D="https://portfolio-js.b.goit.study/api/reviews",K=document.querySelector(".reviews-list");fetch(D).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{K.innerHTML=G(t),new d(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function G(t){return t.map(({avatar_url:s,_id:o,author:c,review:r})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${s}"
            alt="${o}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${c}</h3>
          <p class="reviews-item-text">${r}</p>
        </li>`).join("")}function u(t){const s=t.parentNode;s.classList.contains("success")&&(s.querySelector(".success-label").remove(),s.classList.remove("success"))}function W(t){const s=t.parentNode,o=document.createElement("label");o.classList.add("success-label"),o.textContent="Success",u(t),s.append(o),s.classList.add("success")}function J(t){function s(e){const i=e.parentNode;i.classList.contains("error")&&(i.querySelector(".error-label").remove(),i.classList.remove("error"))}function o(e,i){const m=e.parentNode,p=document.createElement("label");p.classList.add("error-label"),p.textContent=i,m.append(p),m.classList.add("error")}const c=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;let r=!0;return t.querySelectorAll("input").forEach(e=>{e.dataset.required=="true"&&(e.value==""?(s(e),u(e),o(e,"This field is required"),r=!1):e.type==="email"&&!c.test(e.value)?(s(e),u(e),o(e,"Invalid email, try again"),r=!1):(s(e),W(e)))}),r}footerForm=document.querySelector(".footer-form");footerForm.addEventListener("submit",t=>{if(t.preventDefault(),J(footerForm)==!0){const s=new FormData(footerForm);fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:s}).then(o=>{o.ok?alert("Form submitted successfully"):alert("Error submitting form")}).catch(o=>{console.error("Error:",o),alert("Error submitting form")})}});
//# sourceMappingURL=commonHelpers.js.map
