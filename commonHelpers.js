import{S as p,N as w,P as f}from"./assets/vendor-558913cf.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();console.log("header");console.log("hero");console.log("about-me");console.log("benefits");const v="/project-SevenTeam17/assets/image1.11px-bb988309.png",b="/project-SevenTeam17/assets/image1.12px-111ca135.png",d="/project-SevenTeam17/assets/image1.21px-daf377c0.png",x="/project-SevenTeam17/assets/image1.22px-6e1e77a8.png",h="/project-SevenTeam17/assets/image2.11px-9880dbfd.png",j="/project-SevenTeam17/assets/image2.12px-0ceb49a4.png",g="/project-SevenTeam17/assets/image2.21px-eb6c78ab.png",S="/project-SevenTeam17/assets/image2.22px-1fb0ec3f.png",y="/project-SevenTeam17/assets/image3.11px-82c7ad1f.png",L="/project-SevenTeam17/assets/image3.12px-6322b368.png",m="/project-SevenTeam17/assets/image3.21px-356430ed.png",$="/project-SevenTeam17/assets/image3.22px-e3ae8908.png";console.log("projects");const A=document.querySelector(".projects_slider_btn--right"),P=document.querySelector(".projects_slider_btn--left"),u=new p(".projects_image_box",{speed:400,spaceBetween:100});P.addEventListener("click",()=>{B(),u.slidePrev()});A.addEventListener("click",()=>{q(),u.slideNext()});const T=document.querySelector(".swiper-wrapper"),_=`
  <div class="swiper-slide" id=1>
    <img
      class="projects_image" 
      srcset="
        ${v}  292w,
        ${b}  584w,
        ${d}  528w,
        ${x}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${d}"
      alt="Read Jorney App"
    />
  </div>
  <div class="swiper-slide" id="2">
          <img
            class="projects_image"
            srcset="
              ${h}  292w,
              ${j}  584w,
              ${g}  528w,
              ${S}  1056w
            "
            sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
            src="${g}"
            alt="Pet Love App"
          />
        </div>
  <div class="swiper-slide" id=3>
    <img
      class="projects_image" 
      srcset="
        ${y}  292w,
        ${L}  584w,
        ${m}  528w,
        ${$}  1056w
      "
      sizes="(min-width: 1280px) 580px, (min-width: 768px) 580px, 320px"
      src="${m}"
      alt="Vocab Builder App"
    />
  </div>`;T.insertAdjacentHTML("beforeend",_);const r=document.querySelectorAll(".swiper-slide"),n=document.querySelector(".projects_slider_btn--right"),c=document.querySelector(".projects_slider_btn--left");function q(){for(let s=0;s<=r.length-1;s++)r[0].classList.contains("swiper-slide-active")&&(c.classList.toggle("inActive"),c.removeAttribute("disabled"),console.log("disable left btn")),r[2].classList.contains("swiper-slide-next")&&(n.classList.toggle("inActive"),n.setAttribute("disabled","true"))}function B(){r[2].classList.contains("swiper-slide-active")&&(n.classList.toggle("inActive"),n.removeAttribute("disabled")),r[0].classList.contains("swiper-slide-prev")&&(c.classList.toggle("inActive"),c.setAttribute("disbled","true"))}console.log("faq");p.use([w,f]);const N="https://portfolio-js.b.goit.study/api/reviews",O=document.querySelector(".reviews-list");fetch(N).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{O.innerHTML=z(s),new p(".swiper-reviews",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(s=>console.log(s));function z(s){return s.map(({avatar_url:i,_id:l,author:o,review:e})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${i}"
            alt="${l}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${o}</h3>
          <p class="reviews-item-text">${e}</p>
        </li>`).join("")}console.log("work together");
//# sourceMappingURL=commonHelpers.js.map
