// Muito Animate
const Dispositivo = window.matchMedia("(pointer: fine)").matches
     ? "mouse"
     : "touch";

function muitoAnimate() {
     const muito = document.getElementById("muito-animate");

     "MUITO!".split("").forEach((letra, index) => {
          let container = document.createElement("span");
          container.innerHTML = letra;
          container.classList.add("font-bold", "letra-pulo", "text-xl");
          container.style.animationDelay = `${index * 0.1}s`;
          muito.appendChild(container);
     });
}

// Trocando imagem
let image_index = 0;

setInterval(() => {
     const imageContainer = document.getElementById("image-collection");
     imageContainer.style.transition = "transform 0.3s ease-in-out";
     imageContainer.style.transform = "scale(0)";
     setTimeout(() => {
          image_index = (image_index + 1) % 3;
          imageContainer.src = `./src/img/${image_index + 1}.jpg`;
          imageContainer.style.transform = "scale(1)";
     }, 300);
}, 2000);

// Chuva de Emoji
setInterval(
     () => {
          const emoji = document.createElement("span");
          const emojiContainer = document.getElementById("emoji-container");
          const emojis = ["❤️", "🌹", "😻"];

          emoji.classList.add("emoji");
          emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          let left = Math.random() * (100 - 5);
          if (left + 2 > 100) {
               left = 100 - 2;
          }
          emoji.style.left = `${left}%`;
          emojiContainer.appendChild(emoji);

          setTimeout(() => {
               emojiContainer.removeChild(emoji);
          }, 5000);
     },
     Dispositivo == "touch" ? 300 : 100
);

// Load
window.addEventListener("load", function () {
     muitoAnimate();
});

//Scroll
window.addEventListener("scroll", function () {
     const ilv = document.getElementById("ilv");
     const som = 3;

     for (let i = 0; i < som; i++) {
          let a = document.createElement("div");
          a.classList.add("flex", "flex-col", "items-center", "text-auto");
          a.textContent += `Eu te amo muito ${heartEmoji()}`;

          function heartEmoji() {
               const emojis = ["❤️", "💜", "💛", "💙", "💓", "💝", "💞", "💟"];
               return emojis[Math.floor(Math.random() * emojis.length)];
          }

          ilv.appendChild(a);
     }
});
