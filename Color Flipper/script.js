const navbar = document.querySelector('.section-navbar');
const main = document.querySelector('.section-main');

const createFunc = () => {
    let createElem = document.createElement('div');
    createElem.classList.add("main");
    createElem.innerHTML = `<h1 class="down">Click Below To Copy</h1><i class="fa-solid fa-arrow-down"></i><h1 class="heading">background-color : generate;</h1>
    <button class="btn">Generate</button>`
    main.append(createElem);
}
const backgroundHeadChanFunc = (chan1) => {
    document.querySelector('.heading')
        .innerHTML = `background-color : ${chan1};`;
        document.body.style.backgroundColor = chan1;
}
createFunc();
const simpleColorChangeFunc = () => {
    let colorArr = ["red","blue","yellow","purple","black","white","green","pink","purple","aqua"];
    let randomSim = Math.trunc(Math.random() * 9);
    let colorSimPic = colorArr[randomSim];
        backgroundHeadChanFunc(colorSimPic);
}
const randomGenaHexColor = () => {
    let hexCodeStr = "0123456789ABCDEF";
    let hexCode = "#";
    for(let i = 0; i <= 5; i++){
        let randomHex = hexCodeStr[Math.trunc(Math.random() * 16)];
        hexCode = hexCode + randomHex;
    }
   backgroundHeadChanFunc(hexCode);
}
document.querySelector(".simple").style.backgroundColor = " rgba(58, 58, 58, 0.753)";
main.addEventListener("click",(e) => {
    if(e.target.classList.contains("heading")){
        navigator.clipboard.writeText(document.querySelector(".heading").textContent);
    alert(`Copy: \n${document.querySelector(".heading").textContent}`);
    }
    if(e.target.classList.contains("btn")){
        simpleColorChangeFunc();
    }
});

document.body.addEventListener("click",(event) => {
    let eventTarClass = event.target.classList;
if(eventTarClass.contains("simple")){
    document.querySelector(".hex").style.backgroundColor = "";
    event.target.style.backgroundColor = " rgba(58, 58, 58, 0.753)";
    main.addEventListener("click",(e) => {
        if(e.target.classList.contains("btn")){
            simpleColorChangeFunc();
        }
    })
}else if(eventTarClass.contains("hex")){
    document.querySelector(".simple").style.backgroundColor = "";
    event.target.style.backgroundColor = " rgba(58, 58, 58, 0.753)";
    main.addEventListener("click",(e) => {
        if(e.target.classList.contains("btn")){
            randomGenaHexColor();
        }
    })
}
});