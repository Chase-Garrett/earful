// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code doesn't run until the DOM is finished loading
localStorage.setItem('value1', 123);
localStorage.setItem('value2', 'abc');
localStorage.setItem('state', JSON.stringify({ a: 1, b: 2, c: 3 }));
localStorage.removeItem('state')

const state = JSON.parse(localStorage.getItem('state'));
const nameInput = document.querySelector("#name");
const beforeUnloadListener = (event) => {
    event.preventDefault();
    return (event.returnValue = "");
};

playBtn.addEventListener("click", () => {
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    if (playBtn.getAttribute("class") === "paused") {
        audioElement.play();
        playBtn.setAttribute("class", "playing");
        playBtn.textContent = "Pause";
    }
    else if (playBtn.getAttribute("class") === "playing") {
        audioElement.pause();
        playBtn.setAttribute("class", "paused");
        playBtn.textContent = "Play";
    }
});

window.addEventListener('storage', s => {

    console.log(`item changed: ${s.key}`);
    console.log(`from value  : ${s.oldValue}`);
    console.log(`to new value: ${s.newValue}`);
});

nameInput.addEventListener("input", (event) => {
    if (event.target.value !== "") {
        addEventListener("beforeunload", beforeUnloadListener, {
            capture: true
        });
    } else {
        removeEventListener("beforeunload", beforeUnloadListener, {
            capture: true,
        });
    }
});

audioElement.addEventListener("ended", () => {
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
});