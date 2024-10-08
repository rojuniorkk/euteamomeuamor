let cardline = document.getElementById("cardline");
let scrollAtual = window.scrollY;

window.addEventListener("scroll", function () {
     const cardilv = document.getElementById("ilv_card");
     cardilv.style.opacity = `${
          (window.scrollY / (cardline.scrollHeight + 450)) * 100
     }%`;

     if (this.window.scrollY > cardline.scrollHeight) {
     }
});

function tempoPassado(data) {
     const agora = new Date();
     const tempo = agora - new Date(data) * 1000;

     const segundos = Math.floor(tempo / 1000);
     const minutos = Math.floor(segundos / 60);
     const horas = Math.floor(minutos / 60);
     const dias = Math.floor(horas / 24);
     const meses = Math.floor(dias / 30);
     const anos = Math.floor(meses / 12);

     return {
          anos: anos <= 0 ? "" : `${anos} anos, `,
          meses: `${meses % 12} meses, `,
          dias: `${dias % 30} dias, `,
          horas: `${horas % 24} horas, `,
          minutos: `${minutos % 60} minutos e `,
          segundos: `${segundos % 60} segundos`,
     };
}

setInterval(() => {
     let datetext = document.getElementById("date");
     let namore = tempoPassado(1691118000);

     datetext.textContent = `${namore.anos}${namore.meses}${namore.dias}${namore.horas}${namore.minutos}${namore.segundos}`;
}, 1000);
