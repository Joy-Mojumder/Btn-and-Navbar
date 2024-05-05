const numDiv =  document.querySelector('.number');
const text = document.querySelector('.time-text');
let number = 0;
let num = 0;

let interval;

const startTimerFunc = () => {
   interval = setInterval(() => {
        numDiv.textContent = ++number; 
    },1000);
}
const stopTimerFunc = () => {
    clearInterval(interval);
}
const resetTimerFunc = () => {
    number = 0;
    numDiv.textContent = "0";
    clearInterval(interval);
}
const getTimeFunc = (change) => {
    let createElem = document.createElement('p');
    createElem.classList.add("get-time");
    createElem.innerText = `Your ${change} Is ${numDiv.innerText}`;
    text.append(createElem);
}
const maximumParaFunc = (change1) => {
    getTimeFunc(change1);
    num = ++num;
    if(num===4){
        num = 0;
        text.innerHTML = "";
        getTimeFunc(change1);
    }
}

document.body.addEventListener("click",(event) => {
    let evenTarClass = event.target.classList;
if(evenTarClass.contains("start")){
startTimerFunc();
}
if(evenTarClass.contains("stop")){
    stopTimerFunc();
    maximumParaFunc("StopTime");
}
if(evenTarClass.contains("reset")){
    maximumParaFunc("ResetTime");
resetTimerFunc();
}
if(evenTarClass.contains("left")){
    maximumParaFunc("GetTime");
}
if(evenTarClass.contains("right")){
text.innerHTML = "";
}
});