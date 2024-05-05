const counter = document.querySelector('.section-counter');
const num =  document.querySelector('.number');
let number = 0;

const startTimerFunc = () => {
    number = ++number;
    num.textContent = `${number}`
}
let start = setInterval(startTimerFunc,1000);
clearInterval(start);


const stopTimerFunc = () => {

    clearInterval(start);
}


console.log(startTimerFunc());





counter.addEventListener("click",(event) => {
    let evenTarClass = event.target.classList;
if(evenTarClass.contains("btn1")){
    setInterval(startTimerFunc,1000);
startTimerFunc();
}
if(evenTarClass.contains("btn3")){
    stopTimerFunc();
}


});





