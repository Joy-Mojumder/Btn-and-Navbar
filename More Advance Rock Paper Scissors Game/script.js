const scoreBoard = document.querySelector('.your-score'); 
const scoreComBoard = document.querySelector('.com-score'); 
const pRsContainer = document.querySelector('.paper-rock-scissors--section');
const paperDiv = document.querySelector('.paper-div');
const scissorsDiv = document.querySelector('.scissors-div');
const rockDiv = document.querySelector('.rock-div');

const createElem = document.createElement('div');
createElem.classList.add("grid-three--cols");

let numYou = 0;
let numCom = 0;

const winStatusFunc = (heading) => {
    const winStatus = document.createElement('div');
winStatus.classList.add("win-status");
winStatus.innerHTML =`<h1 class="heading">${heading}</h1>
<button class="btn">PLAY AGAIN</button>`;
createElem.append(winStatus);
}

const createPaperFunc = (heading) => {
    const createPaper = document.createElement('div');
    createPaper.classList.add("grid-paper--div");
    createPaper.innerHTML = `<p>${heading} PICKED</p>
    <img src="./images/rock-paper-scissors-game-vector-3959189.png" alt="paper image" width="80%" height="auto" display="block">`
    createElem.append(createPaper);
}
const createScissorsFunc = (heading) => {
    const createScissors = document.createElement('div');
    createScissors.classList.add("grid-scissors--div");
    createScissors.innerHTML = `<p>${heading} PICKED</p>
    <img src="./images/scissors-game-vector-3959189.png" alt="scissors image" width="60%" height="auto">`
    createElem.append(createScissors);
}
const createRockFunc = (heading) => {
    const createRock = document.createElement('div');
    createRock.classList.add("grid-rock--div");
    createRock.innerHTML = `<p>${heading} PICKED</p>
    <img src="./images/rock-game-vector-3959189.png" alt="rock image" width="63%" height="auto">`
    createElem.append(createRock);
}
const randomElemFunction = (difference) => {
    let allElem = ["paper","scissors","rock"];
    let randomElem = Math.trunc(Math.random()*3);
    let randomAllElem = allElem[randomElem];
    console.log(randomAllElem);
    switch (randomAllElem) {
        case "paper":createPaperFunc("COMPUTER");
        if(difference===randomAllElem){
            winStatusFunc("BOTH DRAW");
        }else if(difference==="rock"){
            winStatusFunc("YOU LOOSE");
            scoreComBoard.textContent = ++numCom;
        }else if(difference==="scissors"){
            winStatusFunc("YOU WIN");
            scoreBoard.textContent = ++numYou;
        }
            break;
        case "scissors":createScissorsFunc("COMPUTER");
        if(difference===randomAllElem){
            winStatusFunc("BOTH DRAW");
        }else if(difference==="paper"){
            winStatusFunc("YOU LOOSE");
            scoreComBoard.textContent = ++numCom;
        }else if(difference==="rock"){
            winStatusFunc("YOU WIN");
            scoreBoard.textContent = ++numYou;
        }
            break;
        case "rock":createRockFunc("COMPUTER");
        if(difference===randomAllElem){
            winStatusFunc("BOTH DRAW");
        }else if(difference==="scissors"){
            winStatusFunc("YOU LOOSE");
            scoreComBoard.textContent = ++numCom;
        }else if(difference==="paper"){
            winStatusFunc("YOU WIN");
            scoreBoard.textContent = ++numYou;
        }
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
  let children = createElem.childNodes;
    children.forEach((curElem) => {
        curElem.style.display = "none";
    })
}
})
paperDiv.addEventListener("click",paperClickEvent);
scissorsDiv.addEventListener("click",scissorsClickEvent);
rockDiv.addEventListener("click",rockClickEvent);