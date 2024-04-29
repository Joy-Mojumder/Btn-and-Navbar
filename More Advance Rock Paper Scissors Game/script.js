const scoreBoard = document.querySelector('.your-score'); 
const scoreComBoard = document.querySelector('.com-score'); 
const pRsContainer = document.querySelector('.paper-rock-scissors--section');
const paperDiv = document.querySelector('.paper-div');
const scissorsDiv = document.querySelector('.scissors-div');
const rockDiv = document.querySelector('.rock-div');
const popUpYou = document.querySelector('.popUpFor-you--Div');
const popUpCom = document.querySelector('.popUpFor-com--Div');

const createElem = document.createElement('div');
createElem.classList.add("grid-three--cols");
let numYou = 0;
let numCom = 0;
console.log(numCom);
const popUpWinOrLoose = (you,com) =>{
    if(you >= 10 && com < 10){
        popUpYou.style.display = "grid";
        pRsContainer.style.display = "none";
        createElem.style.display = "none";
    }else if(you < 10 && com >= 10){
        popUpCom.style.display = "grid";
        pRsContainer.style.display = "none";
        createElem.style.display = "none";
    }
};
popUpWinOrLoose();
const reusableFuncAll = (classN,innerH) =>{
    let reusableVar  = document.createElement('div');
    reusableVar.classList.add(classN);
    reusableVar.innerHTML = innerH;
    createElem.append(reusableVar);
}
const winStatusFunc = (heading) => {
    reusableFuncAll("win-status",`<h1 class="heading">${heading}</h1>
    <button class="btn">PLAY AGAIN</button>`);
}
const createPaperFunc = (heading) => {
    reusableFuncAll("grid-paper--div",`<p>${heading} PICKED</p>
    <img src="./images/rock-paper-scissors-game-vector-3959189.png" alt="paper image" width="80%" height="auto" display="block">`);
}
const createScissorsFunc = (heading) => {
    reusableFuncAll("grid-scissors--div",`<p>${heading} PICKED</p>
    <img src="./images/scissors-game-vector-3959189.png" alt="scissors image" width="60%" height="auto">`);
}
const createRockFunc = (heading) => {
    reusableFuncAll("grid-rock--div",`<p>${heading} PICKED</p>
    <img src="./images/rock-game-vector-3959189.png" alt="rock image" width="63%" height="auto">`);
}
const reusableIfElseFunc = (d1,d2,d3) => {
    if(d1===d2){
        winStatusFunc("BOTH DRAW");
    }else if(d1===d3){
        winStatusFunc("YOU LOOSE");
        scoreComBoard.textContent = `${++numCom}/10`;
    }else{
        winStatusFunc("YOU WIN");
        scoreBoard.textContent = `${++numYou}/10`;
    }
    popUpWinOrLoose(numYou,numCom);
} 
const randomElemFunction = (difference) => {
    let allElem = ["paper","scissors","rock"];
    let randomElem = Math.trunc(Math.random()*3);
    let randomAllElem = allElem[randomElem];
    console.log(randomAllElem);
    switch (randomAllElem) {
        case "paper":createPaperFunc("COMPUTER");
        reusableIfElseFunc(difference,randomAllElem,"rock")
            break;
        case "scissors":createScissorsFunc("COMPUTER");
        reusableIfElseFunc(difference,randomAllElem,"paper")
            break;
        case "rock":createRockFunc("COMPUTER");
        reusableIfElseFunc(difference,randomAllElem,"scissors")
            break;
    }
    }
const reUsableFunc = (difference1,difference2) => {
    pRsContainer.style.display = "none";
    document.body.append(createElem);
    difference1("YOU");
    randomElemFunction(difference2);
}
const paperClickEvent = () => {
    reUsableFunc(createPaperFunc,"paper");
}
const scissorsClickEvent = () => {
reUsableFunc(createScissorsFunc,"scissors");
}
const rockClickEvent = () => {
reUsableFunc(createRockFunc,"rock");
}
createElem.addEventListener("click",(event) => {
if(event.target.classList.contains("btn")){
    pRsContainer.style.display = "grid";
    createElem.remove();
    createElem.innerHTML = "";
}
})
popUpYou.addEventListener("click",(event) => {
if(event.target.classList.contains("btn")){
   navigation.reload();
}
})
popUpCom.addEventListener("click",(event) => {
if(event.target.classList.contains("btn")){
   navigation.reload();
}
})
paperDiv.addEventListener("click",paperClickEvent);
scissorsDiv.addEventListener("click",scissorsClickEvent);
rockDiv.addEventListener("click",rockClickEvent);