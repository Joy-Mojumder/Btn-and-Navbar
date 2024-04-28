const clockRef = document.querySelector('.clock');

const dateUpdateFunc = () => {
    const date = new Date();
clockRef.innerText = date.toLocaleTimeString();
};
dateUpdateFunc();
setInterval(dateUpdateFunc,1000);

