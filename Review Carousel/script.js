const image = document.querySelector('.image');
const imgStyle = document.querySelector('.style-div');
const personName = document.querySelector('.name');
const personProf = document.querySelector('.profession');
const personDesc = document.querySelector('.description');
const personsObject = [
    {
        id : 1,
        imgBg : `linear-gradient(90deg, #350537, #5f4269, #8e7e9b, #c3bdcd, #ffffff)`,
        img : `http://127.0.0.1:5501/Review%20Carousel/images/person1.png`,
        Name: `Jane Smith`,
        Profession: `Graphic Designer`,
        ProfColor : `#350537`,
        Description: `Experienced in creating visually appealing designs for web and print. Proficient in Adobe Creative Suite.`,
    },
    {
        id : 2,
        imgBg : `linear-gradient(90deg, #0012e3, #6b56ef, #a08ef8, #d0c6fe, #ffffff)`,
        img : `http://127.0.0.1:5501/Review%20Carousel/images/person2.png`,
        Name: `John Doe`,
        Profession: `Web Developer`,
        ProfColor : `#0012e3`,
        Description: `Specializes in front-end development with expertise in HTML, CSS, and JavaScript. Has a portfolio of responsive and user-friendly websites.`,
    },
    {
        id : 3,
        imgBg : `linear-gradient(90deg, #e300d4, #dd72f0, #dda8ff, #e7d6ff, #ffffff)`,
        img : `http://127.0.0.1:5501/Review%20Carousel/images/person3.png`,
        Name: `Emily Davis`,
        Profession: `Digital Marketer`,
        ProfColor : `#e300d4`,
        Description: `Expert in SEO, PPC, and social media marketing. Has a track record of improving online presence and brand awareness.`,
    },
    {
        id : 4,
        imgBg : `linear-gradient(90deg, #00e3c7, #58eaf9, #a9eeff, #e3f3ff, #ffffff)`,
        img : `http://127.0.0.1:5501/Review%20Carousel/images/person4.png`,
        Name: `Sarah Brown`,
        Profession: `UI/UX Designer`,
        ProfColor : `#00e3c7`,
        Description: `Specializes in designing user interfaces and user experiences that are intuitive and user-friendly. Proficient in design tools like Sketch and Figma.`,
    },
    {
        id : 5,
        imgBg : `linear-gradient(90deg, #e30000, #ff4f77, #ff93c8, #f2cef5, #ffffff)`,
        img : `http://127.0.0.1:5501/Review%20Carousel/images/person5.png`,
        Name: `James Wilson`,
        Profession: `Software Developer`,
        ProfColor : `#e30000`,
        Description: `Experienced in various programming languages including Python, Java, and C++. Has a portfolio of software projects that solve real-world problems.`,
    },
    {
        id : 6,
        imgBg : `linear-gradient(90deg, #000000, #3b3b3b, #777777, #b9b9b9, #ffffff)`,
        img : `http://127.0.0.1:5501/Review%20Carousel/images/person6.png`,
        Name: `Michael Miller`,
        Profession: `Video Editor`,
        ProfColor : `#000000`,
        Description: `Proficient in video editing software like Adobe Premiere Pro and Final Cut Pro. Experienced in editing various types of videos including short films, commercials, and social media clips.`,
    },
    {
        id : 7,
        imgBg : `linear-gradient(to right, #995300, #cc6e62, #e19caf, #e8cfe4, #ffffff)`,
        img : `http://127.0.0.1:5501/Review%20Carousel/images/person7.png`,
        Name: `Jay M`,
        Profession: `Virtual Assistant`,
        ProfColor : `#995300`,
        Description: `Provides administrative support to clients from a remote location. Skilled in managing schedules, handling emails, and performing market research.`,
    },
    {
        id : 8,
        imgBg : `linear-gradient(90deg, #5f00ff, #8a5dff, #b095ff, #d7cbff, #ffffff)`,
        img : `http://127.0.0.1:5501/Review%20Carousel/images/person8.png`,
        Name: `Robert Johnson`,
        Profession: `Content Writer`,
        ProfColor : `#5f00ff`,
        Description: `Skilled in writing engaging and SEO-friendly content for blogs, websites, and social media platforms.`,
    },
]
let number = 0;

const changeReviewPageFunc = (change) => {
    let person = personsObject[change];
        image.src = person.img;
        imgStyle.style.backgroundImage = person.imgBg;
        personName.innerText = person.Name;
        personProf.innerText = person.Profession;
        personProf.style.color = person.ProfColor;
        personDesc.innerText = person.Description;
}
window.addEventListener("DOMContentLoaded" ,() => {
    changeReviewPageFunc(number);
})

document.body.addEventListener("click", (e) => {
if(e.target.classList.contains("fa-angle-left")){
    number++
    if(number > personsObject.length -1){
        number = 0;
    }
changeReviewPageFunc(number);
}
if(e.target.classList.contains("fa-angle-right")){
    number--
    if(number < 0){
      number = personsObject.length -1;
    }
changeReviewPageFunc(number);
}
if(e.target.classList.contains("random")){
    let randomNum = Math.trunc(Math.random() * 8);
    changeReviewPageFunc(randomNum);
}
})