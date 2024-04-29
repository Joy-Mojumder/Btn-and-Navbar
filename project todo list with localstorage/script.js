let inputField = document.getElementById('input');
let inputBtn = document.querySelector('.btn');
let listItems = document.querySelector('.list-container');
const parentDiv =  document.querySelector('.section-container');


let getLocalStorageItems = () => {
    return JSON.parse(localStorage.getItem("todo-list"));
 }
 
const setNewLsData = (listItemsInArray) => {
    localStorage.setItem("todo-list",JSON.stringify(listItemsInArray));
}

let listItemsInArray = getLocalStorageItems() || [];

const createElementAndUse = (createEle) => {
    let createElement = document.createElement('ul');
createElement.classList.add("list-items");
createElement.innerHTML = `<li class="list">${createEle}</li><button class="btn-delete">Delete</button>`;
listItems.append(createElement);
}

const inputBtnClickEvent = (event) => {
    event.preventDefault();

let inputValueFilter = inputField.value.trim();

if(!listItemsInArray.includes(inputValueFilter) && inputValueFilter !== ''){
    listItemsInArray.push(inputValueFilter);

listItemsInArray = [...new Set(listItemsInArray)];

createElementAndUse(inputField.value);

localStorage.setItem("todo-list",JSON.stringify(listItemsInArray));
}
inputField.value = "";
};

const showItemOnScreen = () => {
    let lsDataShowOnPage = listItemsInArray.forEach((curElem) => {
        createElementAndUse(curElem);
    });
}
showItemOnScreen();
console.log(listItemsInArray);


const deleteBtnTarget = (event) => {
let deleteContentLs =event.target.previousElementSibling.innerText.toLowerCase();

listItemsInArray = listItemsInArray.filter((curElem) => {
return curElem !== deleteContentLs;
});    
setNewLsData(listItemsInArray);

event.target.parentElement.remove();

console.log(listItemsInArray);
};

listItems.addEventListener("click",(event) => {
    event.preventDefault();
    if(event.target.classList.contains('btn-delete')){
    deleteBtnTarget(event);
    }
});

inputBtn.addEventListener('click', (event) => {
    inputBtnClickEvent(event);
});

const color1 = document.getElementById('col-1');
const color2 = document.getElementById('col-2');
const color3 = document.getElementById('col-3');


color1.addEventListener("input",() => {
    parentDiv.style.backgroundColor = color1.value;
});
color2.addEventListener("input",() => {
    document.querySelector('.heading').style.color = color2.value;
    let list = document.querySelectorAll('.list');
    for(let item of list){
        item.style.color =color2.value;
    }
});
color3.addEventListener("input",() => {
    inputBtn.style.backgroundColor = color3.value;
   let btn = document.querySelectorAll('.btn-delete');
   for(let item of btn){
    item.style.backgroundColor = color3.value;
}
});