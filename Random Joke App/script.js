const Btn = document.querySelector('.btn');
const image = document.getElementById('image');
const Joke = document.querySelector('.para');
const apiUrl = "https://icanhazdadjoke.com";
//* all images url in Array
const imgArr = [
    {
        img : "http://127.0.0.1:5501/Random%20Joke%20App/images/face_with_tears_of_joy.png"
    },
    {
        img : "http://127.0.0.1:5501/Random%20Joke%20App/images/grinning_face_with_smiling_eyes.png"
    },
    {
        img : "http://127.0.0.1:5501/Random%20Joke%20App/images/grinning_squinting_face.png"
    },
    {
        img : "http://127.0.0.1:5501/Random%20Joke%20App/images/rolling_on_the_floor_laughing.png"
    },
    {
        img : "http://127.0.0.1:5501/Random%20Joke%20App/images/winking_face_with_tongue.png"
    },
    {
        img : "http://127.0.0.1:5501/Random%20Joke%20App/images/smiling_face_with_sunglasses.png"
    },
    {
        img : "http://127.0.0.1:5501/Random%20Joke%20App/images/slightly_smiling_face (2).png"
    },
    {
        img : "http://127.0.0.1:5501/Random%20Joke%20App/images/grinning_face_with_sweat (1).png"
    },
    {
        img : "http://127.0.0.1:5501/Random%20Joke%20App/images/winking_face.png"
    }
]
const randomJokeApiFunc = () => {
    fetch(apiUrl,{
        headers : {
            Accept : "application/json",
        },
    }).then((response) => {
       return response.json();
    }).then((data) => {
       Joke.innerText = `${data.joke}`;
       let randomNum = Math.trunc(Math.random() * 9);
       console.log(randomNum);
       image.src = imgArr[randomNum].img; 
    }).catch((error) => {
        console.log(error);
        Joke.innerText = `${error}`;
    });
}
window.addEventListener("DOMContentLoaded",randomJokeApiFunc);
  
Btn.addEventListener("click" ,() => {
randomJokeApiFunc();
});