const btnOne = document.querySelector('.btn-1');
const btnTwo = document.querySelector('.btn-2');
const copyPara =document.querySelector('.copy-code');

const randomCode = () => {
let colorCode = "0123456789ABCDEF";
let finalCode = "#";
for(num = 0;num<6;num++){
    finalCode = finalCode + `${colorCode[Math.trunc(Math.random()*16)]}`;
}
return finalCode;
}
const BodyBackgroundImgGradient = (leftElem,rightElem,btn,changeElem) => {
    document.body.style.backgroundImage=`linear-gradient(to right top, ${leftElem}, ${rightElem})`;
    copyPara.textContent = `background-image: linear-gradient(to right top, ${leftElem}, ${rightElem})`;
    btn.textContent = `${changeElem}`;
    btn.style.backgroundColor = `${changeElem}`;
}

const clickBtnOne = () =>{
 let leftBtn = randomCode();
   BodyBackgroundImgGradient(leftBtn,btnTwo.textContent,btnOne,leftBtn);
}
const clickBtnTwo = () =>{
    let rightBtn = randomCode();
    BodyBackgroundImgGradient(btnOne.textContent,rightBtn,btnTwo,rightBtn);
}
copyPara.addEventListener("click",() =>{
    navigator.clipboard.writeText(copyPara.textContent);
})

btnOne.addEventListener("click",clickBtnOne);
btnTwo.addEventListener("click",clickBtnTwo);
