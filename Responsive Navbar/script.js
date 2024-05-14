document.querySelector('.menu-btn').addEventListener("click",() => {
    document.querySelector('.container').classList.toggle("overflow");
    document.querySelector('.fa-solid').classList.toggle(`fa-xmark`);
})