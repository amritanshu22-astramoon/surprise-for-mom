const musicButton = document.getElementById("musicButton");

const musicIcon = document.getElementById("musicIcon");

const musicText = document.getElementById("musicText");

const audio = document.getElementById("audio");

let playing = false;


musicButton.addEventListener("click", async () => {

    try {

        if (playing) {

            audio.pause();

            playing = false;

            musicIcon.textContent = "♪";

            musicText.textContent = "Play Music";

        } else {

            await audio.play();

            playing = true;

            musicIcon.textContent = "Ⅱ";

            musicText.textContent = "Pause Music";

        }

    } catch (error) {

        console.log(
            "Audio could not start:",
            error
        );

    }

});
