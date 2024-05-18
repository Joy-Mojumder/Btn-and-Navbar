const number_div = document.getElementById('number-section');

for(let div = 1; div <= 4; div++){
    let createElem = document.createElement('div');
    createElem.className = "integer-div";
    createElem.innerHTML = `<p class="number"></p>
    <p class="para"></p>
    <p class="yes-no"></p>`;
    number_div.append(createElem);
}
 const para_pa = document.querySelectorAll(".para");
 const yes_no = document.querySelectorAll(".yes-no");

const checkFunc = (c1) => {
    let str = `${c1}`;
    let reminder = c1 % 2;
    // integer section
    if(str.length <= 3){
        document.querySelectorAll('.number').forEach((curEle) => {
            curEle.innerText = c1;
        });
        para_pa[0].innerText = `Is a Integer Number`;
        para_pa[1].innerText = `Is a Even Number`;
        para_pa[2].innerText = `Is a Odd Number`;
        para_pa[3].innerText = `Is a Prime Number`;
        yes_no[0].innerText = `Yes`;
    // even or odd section
    if(str.indexOf("0") !== 0){
        if(reminder===0){
        yes_no[1].innerText = `Yes`;
        yes_no[2].innerText = `No`;
        }else{
            yes_no[1].innerText = `No`;
            yes_no[2].innerText = `Yes`;
        }
        // divisible section
        if(!str.includes("-")){
    let arr = [];
    for(let i = 1; i <= 999; i++){
        let num = c1 % i;
        if(!num){
            arr.push(i)
        }
    }
    document.querySelector('.divisible').innerText = `${arr}`;
    // prime number section
    if(arr.length === 2){
        yes_no[3].innerText = `Yes`;
    }else{
        yes_no[3].innerText = `No`;
    }
}else{
    yes_no[3].innerText = `No`;
}
}else{
    yes_no[1].innerText = `No`;
    yes_no[2].innerText = `No`;
    yes_no[3].innerText = `No`;
}
    }else{
        document.querySelector('.divisible').innerText = `${c1} Is Too Big\n Try Less`;
    }
}
document.querySelector(".form").addEventListener('submit', (e) => {
    e.preventDefault();
   let input = document.getElementById("text");
   let filterInput = input.value.trim();
    checkFunc(filterInput);
    input.value = "";
});