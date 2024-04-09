const btnOne = document.querySelector('.btn-1');
const btnTwo = document.querySelector('.btn-2');
const copyPara =document.querySelector('.copy-code');
const randomCode = () => {
let colorCode = "0123456789ABCDEF";
let finalCode = "#";
for(num = 0;num<6;num++){
    // console.log(colorCode[Math.trunc(Math.random()*16)]);
    finalCode = finalCode + `${colorCode[Math.trunc(Math.random()*16)]}`;
}
return finalCode;
}

const clickBtnOne = () =>{
 let leftBtn = randomCode();
   document.body.style.backgroundImage=`linear-gradient(to right top, ${leftBtn}, ${btnTwo.textContent})`;
   copyPara.textContent = `background-image: linear-gradient(to right top, ${leftBtn}, ${btnTwo.textContent})`;
   btnOne.textContent = `${leftBtn}`;
   btnOne.style.backgroundColor = `${leftBtn}`;
   return leftBtn;
}
const clickBtnTwo = () =>{
    let rightBtn = randomCode();
    document.body.style.backgroundImage=`linear-gradient(to right top, ${btnOne.textContent}, ${rightBtn})`;
    copyPara.textContent = `background-image: linear-gradient(to right top, ${btnOne.textContent}, ${rightBtn})`;
    btnTwo.textContent = `${rightBtn}`;
    btnTwo.style.backgroundColor = `${rightBtn}`;
}
copyPara.addEventListener("click",() =>{
    navigator.clipboard.writeText(copyPara.textContent);
})

btnOne.addEventListener("click",clickBtnOne);
btnTwo.addEventListener("click",clickBtnTwo);
