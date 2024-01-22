var prevArrow = document.getElementById("prev");
var nextArrow = document.getElementById("next");
var img1 = document.getElementById("img");
var img2 = document.getElementById("img1");
var img3 = document.getElementById("img2");

var i = 0;
var imgs = [
  "../../Lab8/images/1.png",
  "../../Lab8/images/2.png",
  "../../Lab8/images/3.png",
  "../../Lab8/images/4.png",
  "../../Lab8/images/5.png",
  "../../Lab8/images/6.png",
];

function next() {
  i++;
  if (i > imgs.length - 1) {
    i = 0;
  }
  updateImagesForNext();
  
}

function prev() {
  i--;
  if (i < 0) {
    i = imgs.length - 1;
  }
  updateImagesForPrev();
}

function updateImagesForNext() {
  let index1 = i % imgs.length;
  let index2 = (i + 1) % imgs.length;
  let index3 = (i + 2) % imgs.length;

  img1.src = imgs[index1];
  img2.src = imgs[index2];
  img3.src = imgs[index3];
}
function updateImagesForPrev() {
  let index1 = i % imgs.length;
  let index2 = (i - 1) % imgs.length;
  let index3 = (i - 2) % imgs.length;

  img1.src = imgs[index1];
  img2.src = imgs[index2];
  img3.src = imgs[index3];
}

prevArrow.addEventListener("click", prev);
nextArrow.addEventListener("click", next);

setInterval(function () {
  next();
}, 5000);
