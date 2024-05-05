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
        let createElem = document.createElement('div');
        createElem.classList.add("color-div");
        createElem.innerText = `${randomColorGenF()}`;
        createElem.style.backgroundColor = randomColorGenF();
        main.append(createElem);        
    }
}
createMultiDivF(45);

const popUpSelectFunc = (event) => {
    let eventTar = event.target;
pop.style.display = "flex";
pop.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
classLAddaRemove(eventTar,"color-pop","color-div");
pop.append(eventTar);
}
document.body.addEventListener("click",(event) => {
    if(event.target.classList.contains("color-div")){
        document.body.classList.add("active-popUp");
        document.querySelectorAll('.color-div').forEach((curElem) => {
            classLAddaRemove(curElem,"color-pop","color-div");
        })
        popUpSelectFunc(event);
    }
    if(event.target.classList.contains("fa-xmark")){
        pop.style.display = "none";
        document.querySelectorAll('.color-pop').forEach((curElem) => {
            classLAddaRemove(curElem,"color-div","color-pop");
        })
        document.body.classList.remove("active-popUp");
    }
    if(event.target.classList.contains("fa-plus")){
        let createElem = document.createElement('div');
        createElem.classList.add("color-div");
        createElem.innerText = `${randomColorGenF()}`;
        createElem.style.backgroundColor = randomColorGenF();
        main.append(createElem);  
    }
});