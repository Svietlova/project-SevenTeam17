import{S as p,N as v,K as j,M as h,A as y,P as S,i as _}from"./assets/vendor-a432d4a5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();(()=>{const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),r=document.querySelector(".mobile-menu"),e=document.querySelector(".header-order-link"),o=()=>{const n=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")};s.addEventListener("click",o),i.addEventListener("click",o),r.addEventListener("click",o),e.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();const L=document.querySelector(".menu-title");L.addEventListener("click",t=>{t.preventDefault(),document.querySelector(".header-list").classList.toggle("hidden")});const x=document.querySelectorAll(".accordion-header"),q=document.querySelector(".accordion-panel"),T=document.querySelector(".about-ac"),A=document.querySelector(".mobile-open-ac");q.style.maxHeight="100%";T.classList.add("active");A.style.transform="rotate(180deg)";x.forEach(t=>{t.addEventListener("click",function(){const s=this.closest(".about-ac"),i=s.querySelector(".accordion-panel"),r=this.querySelector(".mobile-open-ac");s.classList.toggle("active"),s.classList.contains("active")?(i.style.maxHeight=i.scrollHeight+"px",r.style.transform="rotate(180deg)"):(i.style.maxHeight="0",r.style.transform="rotate(0deg)")})});new p(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[v,j,h],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});const P="/project-SevenTeam17/assets/image1.11px-bb988309.png",E="/project-SevenTeam17/assets/image1.12px-111ca135.png",m="/project-SevenTeam17/assets/image1.21px-daf377c0.png",k="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",B="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",$="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",g="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",M="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",I="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",O="/project-SevenTeam17/assets/image3.12px-6322b368.png",f="/project-SevenTeam17/assets/image3.21px-356430ed.png",V="/project-SevenTeam17/assets/image3.22px-e3ae8908.png",z=document.querySelector(".projects_slider_btn--right"),H=document.querySelector(".projects_slider_btn--left"),w=new p(".projects_box",{speed:400,spaceBetween:100});H.addEventListener("click",()=>{K(),w.slidePrev()});z.addEventListener("click",()=>{R(),w.slideNext()});const N=document.querySelector(".projects_wrapper"),C=`
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
        ${E}  584w,
        ${m}  528w,
        ${k}  1056w
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
              ${B}  292w,
              ${$}  584w,
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
        ${I}  292w,
        ${O}  584w,
        ${f}  528w,
        ${V}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${f}"
      alt="Vocab Builder App"
    />
  </li>`;N.insertAdjacentHTML("beforeend",C);const a=document.querySelectorAll(".projects-slide"),l=document.querySelector(".projects_slider_btn--right"),d=document.querySelector(".projects_slider_btn--left");function R(){for(let t=0;t<=a.length-1;t++)a[0].classList.contains("swiper-slide-active")&&(d.classList.toggle("inActive"),d.removeAttribute("disabled"),console.log("disable left btn")),a[2].classList.contains("swiper-slide-next")&&(l.classList.toggle("inActive"),l.setAttribute("disabled","true"))}function K(){a[2].classList.contains("swiper-slide-active")&&(l.classList.toggle("inActive"),l.removeAttribute("disabled")),a[0].classList.contains("swiper-slide-prev")&&(d.classList.toggle("inActive"),d.setAttribute("disbled","true"))}const D=document.querySelector(".accordion-container");new y(D,{duration:600,showMultiple:!0});p.use([v,S]);const G="https://portfolio-js.b.goit.study/api/reviews",J=document.querySelector(".reviews-list");fetch(G).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{J.innerHTML=W(t),new p(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function W(t){return t.map(({avatar_url:s,_id:i,author:r,review:e})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${s}"
            alt="${i}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${r}</h3>
          <p class="reviews-item-text">${e}</p>
        </li>`).join("")}const b=document.querySelector(".footer-form");b.addEventListener("submit",function(t){t.preventDefault();const s=document.querySelector(".footer-modal-background"),i=document.querySelector(".footer-input-success-message"),r=document.querySelector(".footer-input-error-message"),e=document.getElementById("email"),o=document.getElementById("comment");e.classList.remove("footer-input-error"),r.style.display="none";const n={email:e.value,comment:o.value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(c=>(c.ok?(s.classList.add("footer-modal-is-open"),document.querySelector(".footer-modal-btn").addEventListener("click",function(){s.classList.remove("footer-modal-is-open")}),document.addEventListener("keydown",function(u){u.key==="Escape"&&s.classList.remove("footer-modal-is-open")}),s.addEventListener("click",function(u){u.target===s&&s.classList.remove("footer-modal-is-open")}),e.classList.add("footer-input-success"),i.style.display="block",setTimeout(function(){i.style.display="none",e.classList.remove("footer-input-success")},1e4),b.reset()):(_.error({title:"Oops!",message:"Please, enter a valid email address"}),e.classList.add("footer-input-error"),r.style.display="block"),c.json())).then(c=>c).catch(c=>c)});
//# sourceMappingURL=commonHelpers.js.map
