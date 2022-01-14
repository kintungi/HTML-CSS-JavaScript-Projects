const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const soundDiv = document.getElementById("buttons")

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.textContent = sound;

    soundDiv.appendChild(btn);

    btn.addEventListener("click", () => {

        stopSounds();

        document.getElementById(sound).play()
    })
    
})

function stopSounds() {
    sounds.forEach(sound => {
        const music = document.getElementById(sound);

        music.pause(); //Since there is no stop() we use pause then

        music.currentTime = 0;//The current time property is used to reset the play
    })
}