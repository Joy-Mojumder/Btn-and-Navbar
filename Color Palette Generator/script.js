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
createMultiDivF(45);
let num = 0;
const whenCopyPopUpf = (app) => {
    let copyDiv = document.createElement('div');
    copyDiv.classList.add("copy-div");
    copyDiv.innerText = `Color Code Copied`;
    app.append(copyDiv);
    setInterval(() => {
        copyDiv.remove();
    },2000)
}

const popUpSelectFunc = (event) => {
    let eventTar = event.target;
pop.style.display = "grid";
pop.innerHTML = `<i class="fa-solid fa-xmark"></i><i class="fa-solid fa-plus plus"></i>`;
let create = document.createElement('div');
create.innerHTML = `<i class="fa-solid fa-copy"></i>`;
eventTar.append(create);
classLAddaRemove(eventTar,"color-popLong","color-div");
pop.append(eventTar);
eventTar.addEventListener("click",(e) => {
    if(e.target.classList.contains("fa-copy")){
      whenCopyPopUpf(eventTar);
        navigator.clipboard.writeText(eventTar.textContent);
    }
})
}
document.body.addEventListener("click",(event) => {
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
        num = 0;
        pop.style.display = "none";
        document.querySelectorAll('.color-pop').forEach((curElem) => {
            classLAddaRemove(curElem,"color-div","color-pop");
        })
        document.body.classList.remove("active-popUp");
    }
    if(num<=13){
    console.log(num);
        if(event.target.classList.contains("plus")){
            num = ++num;
            let colorCodeStr = "0123456789ABCDEF";
            let hexColor = "";
            for(let i = 0; i <= 1; i++){
                let randomCode = colorCodeStr[Math.trunc(Math.random() * 16)];
                hexColor = hexColor + randomCode;
            }
            let random = document.querySelector(".color-popLong").innerText;;
            let str = random.slice(5,7);
           let randomR = random.replace(`${str}`,`${hexColor}`);
            let createElem = document.createElement('div');
            createElem.classList.add("color-popLong");
            createElem.textContent = `${randomR}`;
            let create = document.createElement('div');
            create.innerHTML = `<i class="fa-solid fa-copy"></i>`;
            createElem.append(create);
            createElem.style.backgroundColor = randomR;
            pop.append(createElem);  
            createElem.addEventListener("click",(e) => {
                if(e.target.classList.contains("fa-copy")){
                    whenCopyPopUpf(createElem);
                    navigator.clipboard.writeText(randomR);
                }
            })
        }
    }
});