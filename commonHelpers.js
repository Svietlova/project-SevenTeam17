import{S as l,N as d,P as a}from"./assets/vendor-558913cf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();console.log("header");console.log("hero");console.log("about-me");console.log("benefits");console.log("projects");const u=document.querySelector(".projects_slider_btn--right"),p=document.querySelector(".projects_slider_btn--left"),c=new l(".swiper",{speed:400,spaceBetween:100});u.addEventListener("click",()=>{c.slideNext()});p.addEventListener("click",()=>{c.slidePrev()});console.log("faq");l.use([d,a]);const f="https://portfolio-js.b.goit.study/api/reviews",w=document.querySelector(".reviews-list");fetch(f).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{w.innerHTML=g(r),new l(".swiper",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(r=>console.log(r));function g(r){return r.map(({avatar_url:s,_id:o,author:i,review:e})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${s}"
            alt="${o}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${i}</h3>
          <p class="reviews-item-text">${e}</p>
        </li>`).join("")}console.log("work together");
//# sourceMappingURL=commonHelpers.js.map
