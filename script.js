let [milliseconds , seconds , minutes , hours ] = [0, 0, 0, 0];

const start = document.querySelector("#Start")
const pause = document.querySelector("#Pause")
const stop = document.querySelector("#Reset")

const display = document.querySelector("#Display")



let int = null;

start.addEventListener("click",(e)=>{
    console.log(e.target);

    if(int!==null){
        clearInterval(int);
    }

    int = setInterval( start_Watch, 10);

})


pause.addEventListener("click",(e)=>{
    console.log(e.target);

    clearInterval(int);
})


stop.addEventListener("click",(e)=>{
    console.log(e.target);
    clearInterval(int);

    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    display.innerHTML = "00:00:00:000";

})


function start_Watch(){

    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    display.innerHTML =`${h}:${m}:${s}:${ms}`;
}