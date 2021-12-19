// https://stackoverflow.com/questions/31579700/how-to-make-a-single-button-act-as-a-start-and-stop-button-in-javascript
// TODO
// - Start the timer by clicking on the start link/button.
// - Once the user clicks start, the word start will change to stop. Then, the user can click on the stop button to make the timer stop.
let startStop = document.getElementById("startStop");

startStop.addEventListener("click", Start);

function Start(){
    console.log("Started");
    startStop.removeEventListener("click", Start);
    startStop.addEventListener("click", Stop);
    startStop.value = "Stop";
}

function Stop(){
    console.log("Stopped");
    startStop.removeEventListener("click", Stop);
    startStop.addEventListener("click", Start);
    startStop.value = "Start";
}

// Timer concept

let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let settings= document.querySelector(".settings");

let initial, totalsecs, stop, mins, seconds;

