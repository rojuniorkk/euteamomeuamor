const Player = {
    button: document.getElementById("player_button"),
    audio: new Audio('./src/audio/song.mp3'),
}

Player.button.addEventListener('click', () => {

    Player.button.classList.remove("pulse")

    if (Player.audio.paused) {
        Player.audio.play()
        Player.button.innerText = "pause"
    } else {
        Player.audio.pause()
        Player.button.innerText = 'play_arrow'
    }
})
