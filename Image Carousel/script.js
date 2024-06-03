import {image} from "./images.js"
const RootDiv = document.getElementById('root');
let index = 0;
const createElem = () => {
    const element = document.createElement('div');
    element.classList.add("imageDiv");
    element.innerHTML = `<button class="sub">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg1">
      <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
    </svg>
  </button>
  <img class="image" src="./images/_2c5d7c52-e8f9-4d22-b4e7-1946ede0d7cc.jpg" alt="desert location">
  <button class="add">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg2">
    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
  </svg>
  </button>
  <div class="rounded">
  </div>
  `;
    RootDiv.append(element);
    for(let i = 0;i <= 8; i++){
        let elementD = document.createElement('div');
        elementD.classList.add(`roundDiv`);
        document.querySelector(".rounded").append(elementD);
      }
      document.querySelector(".rounded").firstElementChild.classList.add("active");
}

RootDiv.addEventListener("click",(e) => {
    let imgTag = document.querySelector(".image");

    if(e.target.classList.contains("sub") || e.target.classList.contains("svg1")){
        index--
        if(index < 0){
            index = image.length-1;
        }
    }
    if(e.target.classList.contains("add") || e.target.classList.contains("svg2")){
        index++
        if(index > image.length-1){
            index = 0;
        }  
    }
imgTag.src = `${image[index].img}`;
imgTag.alt = `${image[index].text}`;

let round = document.querySelectorAll('.roundDiv');

for (let i = 0; i < round.length; i++) {
  round[i].className = round[i].className.replace(" active", "");
  console.log(round[i].className);
}
round[index].className += " active";
});

document.body.addEventListener("load", createElem());