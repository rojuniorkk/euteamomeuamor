function tempoPassado(data) {
     const agora = new Date();
     const diff = agora - data;

     const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
     const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
     const dias = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
     const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
     const minutos = Math.floor(diff / (1000 * 60)) % 60;
     const segundos = Math.floor(diff / 1000) % 60;

     return {
          anos:
               anos <= 0 ? null : anos > 1 ? `${anos} anos, ` : `${anos} ano, `,
          meses:
               meses <= 0
                    ? null
                    : meses > 1
                    ? `${meses} meses, `
                    : `${meses} mês, `,
          dias:
               dias <= 0 ? null : dias > 1 ? `${dias} dias, ` : `${dias} dia, `,
          horas:
               horas <= 0
                    ? null
                    : horas > 1
                    ? `${horas} horas, `
                    : `${horas} hora, `,
          minutos:
               minutos <= 0
                    ? null
                    : minutos > 1
                    ? `${minutos} minutos, `
                    : `${minutos} minuto, `,
          segundos:
               segundos <= 0
                    ? null
                    : segundos > 1
                    ? `${segundos} segundos`
                    : `${segundos} segundo`,
     };
}

setInterval(() => {
     let date = document.getElementById("date");
     let namoro = tempoPassado(new Date("2024-08-04 00:00:00"));

     date.innerHTML = `${namoro.anos == null ? "" : namoro.anos} ${namoro.meses} ${namoro.dias} ${namoro.horas} ${namoro.minutos} ${namoro.segundos}`;
}, 1000);
