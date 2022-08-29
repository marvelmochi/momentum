//const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const img = images[Math.floor(Math.random() * images.length)];
const imgSrc = "./img/" + img;

document.body.style.backgroundImage = "url(" + imgSrc + ")";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100vw 100vh";
