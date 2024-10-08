var countILV = 0;
var imgIndex = 0;


// Trocar as imagens
setInterval(() => {
     const imgCollection = document.getElementById("img-collection");
     const imgList = Array.from(
          { length: 7 },
          (_, i) => `./src/img/${i + 1}.jpg`
     );

     imgCollection.style.transition = "transform .3s ease-in-out";
     imgCollection.style.transform = "scale(.01)";

     setTimeout(() => {

          imgIndex = (imgIndex + 1) % imgList.length;
          imgCollection.src = imgList[imgIndex];
          imgCollection.style.transform = "scale(1)";

     }, 300);
}, 3000);


// Chuva de emoji
setInterval(() => {
     const emoji = document.createElement("div");

     const emojiContainer = document.getElementById("emoji-container");
     const emojis = ["❤️", "❤️", "❤️", "❤️", "👰"];

     emoji.classList.add("emoji");
     emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
     emoji.style.left = `${Math.random() * 100}%`;
     emojiContainer.appendChild(emoji);

     setTimeout(() => {
          emojiContainer.removeChild(emoji);
     }, 5000);
}, 290);

// Eu te amo infinitamente
function gen_ilv() {
     const ilv = document.getElementById("ilv");

     const som = 5;

     for (let i = 0; i < som; i++) {
          let a = document.createElement("div");
          a.classList.add("flex", "flex-col", "items-center", "text-auto");
          a.textContent += `Eu te amo muito ❤️`;

          ilv.appendChild(a);
     }

     countILV += som;
     document.getElementById("ilv_cout").textContent = formatNum(countILV);
}

window.addEventListener("scroll", gen_ilv);
gen_ilv();
