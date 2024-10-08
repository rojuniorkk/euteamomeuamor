const player = {
    button : document.getElementById("player_button"),
    audio : new Audio('./src/audio/song.mp3'),
}

player.button.addEventListener("click", () => {
    if (player.audio.paused) {
        player.audio.play();
        player.button.textContent = "pause";
    } else {
        player.audio.pause();
        player.button.textContent = "play_arrow";
    }
})

player.audio.addEventListener("timeupdate", () => {
    console.log(player.audio.currentTime);
})
