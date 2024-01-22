var prevArrow = document.getElementById("prev");
var nextArrow = document.getElementById("next");
var img = document.getElementById("img");

var i = 0;
var imgs = [
  "../../Lab8/images/1.png",
  "../../Lab8/images/2.png",
  "../../Lab8/images/3.png",
  "../../Lab8/images/4.jpeg",
];

function next() {
  i++;
  if (i > imgs.length - 1) {
    i = 0;
  }
  img.src = imgs[i];
}
function prev() {
  i--;
  if (i < 0) {
    i = imgs.length - 1;
  }
  img.src = imgs[i];
}

prevArrow.addEventListener("click", prev);

nextArrow.addEventListener("click", next);

setInterval(function () {
  next();
}, 2000);
