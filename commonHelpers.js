import{S as a,N as g,P as m}from"./assets/vendor-558913cf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}})();console.log("header");console.log("hero");console.log("about-me");console.log("benefits");console.log("projects");const u=document.querySelector(".projects_slider_btn--right"),w=document.querySelector(".projects_slider_btn--left"),d=new a(".swiper",{speed:400,spaceBetween:100});w.addEventListener("click",()=>{h(),d.slidePrev()});u.addEventListener("click",()=>{v(),d.slideNext()});const f=document.querySelector(".swiper-wrapper"),x=`
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
  </div>`;f.insertAdjacentHTML("beforeend",x);const r=document.querySelectorAll(".swiper-slide"),n=document.querySelector(".projects_slider_btn--right"),c=document.querySelector(".projects_slider_btn--left");function v(){for(let t=0;t<=r.length-1;t++)r[0].classList.contains("swiper-slide-active")&&(c.classList.toggle("inActive"),c.removeAttribute("disabled"),console.log("disable left btn")),r[2].classList.contains("swiper-slide-next")&&(n.classList.toggle("inActive"),n.setAttribute("disabled","true"))}function h(){r[2].classList.contains("swiper-slide-active")&&(n.classList.toggle("inActive"),n.removeAttribute("disabled")),r[0].classList.contains("swiper-slide-prev")&&(c.classList.toggle("inActive"),c.setAttribute("disbled","true"))}console.log("faq");a.use([g,m]);const b="https://portfolio-js.b.goit.study/api/reviews",j=document.querySelector(".reviews-list");fetch(b).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{j.innerHTML=y(t),new a(".swiper",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(t=>console.log(t));function y(t){return t.map(({avatar_url:s,_id:l,author:o,review:e})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${s}"
            alt="${l}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${o}</h3>
          <p class="reviews-item-text">${e}</p>
        </li>`).join("")}console.log("work together");
//# sourceMappingURL=commonHelpers.js.map
