const coversImg = document.querySelector(".content");
let contentAlt = ["A brand what is inspired", "Transform your body", "MIMINO", "Manage your finance", "Welcome to our collection",
    "Reviving the traditional Ukraine", "Organic vegetables", "Get body in shape", "Fresh harvest box", "Discover the joy of learning"];

let allContentImg = "";

function addContentImg() {
let contentImg = `<div class="marquee__inner">`;
    for (let i = 0; i < 10; i++) {
        const randomNum = Math.floor(Math.random() * 10);
        const imgElement = `<img
    class="marquee__line"
    srcset="../img/covers/rectangle-${randomNum + 1}@2x.jpg 2x"
    src="../img/covers/rectangle-${randomNum + 1}.jpg"
    alt="${contentAlt[randomNum]}"
    loading="lazy"
  />`;
        contentImg += imgElement;
    }
    contentImg += `</div>`
    console.log(contentImg);
    return contentImg;
}

for (let i = 0; i < 3; i++) {
  allContentImg += addContentImg();
}

console.log(allContentImg);
coversImg.innerHTML = allContentImg;