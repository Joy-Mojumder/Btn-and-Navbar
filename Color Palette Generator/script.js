const main = document.querySelector('.section-main');
const pop = document.querySelector('.popUp');

const randomColorGenF = () => {
    let colorCodeStr = "0123456789ABCDEF";
    let hexColor = "#";
    for(let i = 0; i <= 5; i++){
        let randomCode = colorCodeStr[Math.trunc(Math.random() * 16)];
        hexColor = hexColor + randomCode;
    }
    return hexColor;
}
const classLAddaRemove = (div,cs1,cs2) => {
    div.classList.add(`${cs1}`);
    div.classList.remove(`${cs2}`);
}
const createMultiDivF = (numb) => {
    for(let num = 0; num <= numb; num++){
    let random = randomColorGenF();
        let createElem = document.createElement('div');
        createElem.classList.add("color-div");
        createElem.innerText = `${random}`;
        createElem.style.backgroundColor = random;
        main.append(createElem);        
    }
}
createMultiDivF(100);

const whenCopyPopUpf = (app) => {
    let copyDiv = document.createElement('div');
    copyDiv.classList.add("copy-div");
    copyDiv.innerText = `Color Code Copied`;
    app.append(copyDiv);
    setInterval(() => {
        copyDiv.remove();
    },2000)
}
const localStorFunc = (chan) => {
    let str = JSON.stringify(chan);
localStorage.setItem("bg-color",`${str}`);
}

const popUpSelectFunc = (event) => {
    let eventTar = event.target;
pop.style.display = "grid";
pop.innerHTML = `<h1>Hex Code:\n ${eventTar.textContent}</h1><i class="fa-solid fa-xmark"></i><i class="fa-solid fa-copy"></i><p>Or</p><a class="anchor" href="palette.html">Create Variant</a>`;

localStorFunc(eventTar.textContent);
document.querySelector(".anchor").style.backgroundColor = `${eventTar.innerText}`;
pop.style.backgroundColor = `${eventTar.innerText}`;
classLAddaRemove(eventTar,"color-popLong","color-div");
pop.append(eventTar);
eventTar.addEventListener("click",(e) => {
    if(e.target.classList.contains("fa-copy")){
      whenCopyPopUpf(eventTar);
        navigator.clipboard.writeText(eventTar.textContent);
    }
});
}
document.body.addEventListener("click",(event) => {
    let evenTar = event.target.parentElement;

    if(event.target.classList.contains("color-div")){
        document.body.classList.add("active-popUp");
        document.querySelectorAll('.color-div').forEach((curElem) => {
            classLAddaRemove(curElem,"color-pop","color-div");
        })
        popUpSelectFunc(event);
    }
    if(event.target.classList.contains("main")){
    let random = randomColorGenF();
        let createElem = document.createElement('div');
        createElem.classList.add("color-div");
        createElem.innerText = `${random}`;
        createElem.style.backgroundColor = random;
        main.append(createElem);  
    }
    if(event.target.classList.contains("fa-xmark")){
        pop.style.display = "none";
        document.querySelectorAll('.color-pop').forEach((curElem) => {
            classLAddaRemove(curElem,"color-div","color-pop");
        })
        document.body.classList.remove("active-popUp");
    }
    if(event.target.classList.contains("fa-copy")){
        whenCopyPopUpf(evenTar);
        let arr = evenTar.innerText.split("");
        let color = arr.splice(10,7);
        let str = color.join("");
          navigator.clipboard.writeText(str);
  }
});