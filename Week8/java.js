const title = document.getElementById("title");
title.style.backgroundColor = "#0099cc";
title.style.padding = "10px";
title.style.color = "black";
title.style.fontweight = "bold";

const image2container = document.getElementById("image2container");
const scaleimage = document.getElementById("scaleimage");
const clickimage = document.getElementById("clickimage");

//Apply initial styles to ensure vertical stacking and proper layout
if(clickimage){
    clickimage.style.display = "block"; // Stack vertically
    clickimage.style.margin = "10px 0"; // Optional spacing
}

//Buttons
const buttons =document.getElementsByTagName("button");
for (let button of buttons){
    button.style.padding = '10px 20px';
    button.style.fontsize = '16px';
    button.style.cursor = 'pointer';
    button.style.backgroundColor = 'rgba(0, 0, 0, 7)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
}

if (image2container && scaleimage) {
  
    image2container.style.display = "block"; 
    image2container.style.width = "600px"; 
    image2container.style.height = "200px"; 
    image2container.style.textAlign = "center"; 
    image2container.style.backgroundColor = "transparent"; 
    image2container.style.margin = "10px 0"; 
    
    scaleimage.style.display = "block";
    scaleimage.style.display = "100%";
    scaleimage.style.display = "100%";

    const textContainer = document.getElementById('text-container');
    textContainer.style.backgroundColor = "violet"

    textContainer.style.Toppadding = "80px";
    textContainer.style.borderRadius = "100px";
    textContainer.style.margin = "20px";
    textContainer.style.cursor = "pointer";
    textContainer.style.height = "100px";
    textContainer.style.textAlign = "center";
    textContainer.style.width = "700px";

    const formContainer = document.getElementById('formcontainer');
    formContainer.style.backgroundColor = 'pink';
    formContainer.style.padding = '20px';
    formContainer.style.borderRadius = '100px';
    formContainer.style.display = 'block';
    formContainer.style.textAlign = 'center';
}

const images = [
    "images/comp1.jpeg",
    "images/comp2.jpeg"
]

let currentIndex = 0
const imageElement = document.getElementById("image1")
const nextbutton = document.getElementById("nextbutton")
const prevbutton = document.getElementById("prevbutton")

nextbutton.addEventListener("click" , ()=> {
    currentIndex = (currentIndex + 1)% images.length;
    imageElement.src = images[currentIndex];
});
prevbutton.addEventListener("click" , ()=> {
    currentIndex = (currentIndex - 1+ images.length)% images.length;
    imageElement.src = images[currentIndex];
});

let second = document.getElementById("second");
second.style.position = "relative"
let text = document.getElementById("textdisplay");
text.style.position = "absolute"
text.style.color ="white"
second.addEventListener("mouseenter", function() {
    text.innerHTML = "The man is good"
})
second.addEventListener("mouseleave", function(){
    text.innerHTML = ""
})

const imgcontainer = document.getElementById("image2container");
const scaleimage = document.getElementById("scaleimage")

scaleimage.addEventListener("mouseenter", function(){
    scaleimage.style.transition = "transform 0.5s ease-in-out";
    image2container.style.transition = "background color 0.5s ease-in-out";
    scaleimage.style.transform = "scale(0.5)";
    image2container.style.backgroundColor = "pink"

});
scaleimage.addEventListener("mouseleave", function(){
    scaleimage.style.transition = "transform 3s ease-in-out";
    image2container.style.transition = "background color 3s ease-in-out";
    scaleimage.style.transform = "scale(1)";
    image2container.style.backgroundColor = "peach"

});

const textContainer = document.getElementById ("text-container");
textContainer.innerHTML = "Sign up to know more about me and the world of web developmet"
textContainer.addEventListener("mouseenter", ()=>{
    textContainer.innerHTML = "My name is Emmanuel Esther and I'm a tech enthusiast, i am very passionate about software development"
});

textContainer.addEventListener("mouseleave", () =>{
    textContainer.innerHTML = "Sign up to know more about me and the world of web development"
});

function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;
    if (username && email && password) {
        document.getElementById('signup-container')
    } else {
        alert('Please fill all fields');
    }
    window.open("sign.html")
}
document.getElementById('signup-button').addEventListener('click', submitForm);
