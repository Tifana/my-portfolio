let changeColor = () => {
  document.querySelector(".banner").style.backgroundColor = "#84C3C8";
  document.querySelector(".intro").style.color = "white";
};

let changeColor2 = () => {
  document.querySelector(".banner").style.backgroundColor = "aquamarine";
  document.querySelector(".intro").style.color = "black";
};

let changeColor3 = () => {
  document.querySelector(".banner").style.backgroundColor = "pink";
  document.querySelector(".intro").style.color = "brown";
};

const images = ["linkedin.png", "github.png", "instagram.png"];
for (let i = 0; i < images.length; i++) {
  new Image().src = images[i];
}
