images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const img = images[Math.floor(Math.random() * 3)];
const imgSrc = "./img/" + img;
console.log(imgSrc);

document.body.style.backgroundImage = "url(" + imgSrc + ")";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100vw 100vh";
