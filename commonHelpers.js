import{S as l,N as d,P as u}from"./assets/vendor-558913cf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();console.log("header");console.log("hero");console.log("about-me");console.log("benefits");console.log("projects");const g=document.querySelector(".projects_slider_btn--right"),p=document.querySelector(".projects_slider_btn--left"),a=new l(".swiper",{speed:400,spaceBetween:100});g.addEventListener("click",()=>{a.slideNext()});p.addEventListener("click",()=>{a.slidePrev()});console.log("faq");const f=document.querySelector(".content");let m=["A brand what is inspired","Transform your body","MIMINO","Manage your finance","Welcome to our collection","Reviving the traditional Ukraine","Organic vegetables","Get body in shape","Fresh harvest box","Discover the joy of learning"],c="";function h(){let e='<div class="marquee__inner">';for(let o=0;o<10;o++){const i=Math.floor(Math.random()*10),n=`<img
    class="marquee__line"
    src="./img/covers/rectangle-${i+1}.jpg"
    alt="${m[i]}"
    loading="lazy"
  />`;e+=n}return e+="</div>",e}for(let e=0;e<5;e++)c+=h();console.log(c);f.innerHTML=c;l.use([d,u]);const w="https://portfolio-js.b.goit.study/api/reviews",v=document.querySelector(".reviews-list");fetch(w).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{v.innerHTML=y(e),new l(".swiper",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(e=>console.log(e));function y(e){return e.map(({avatar_url:o,_id:i,author:n,review:t})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${o}"
            alt="${i}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${n}</h3>
          <p class="reviews-item-text">${t}</p>
        </li>`).join("")}console.log("work together");
//# sourceMappingURL=commonHelpers.js.map
