const ShowImg = document.getElementById("ShowImg");
const myImg = document.getElementById("myImg");

ShowImg.onclick = function () {
  myImg.style.display = "flex";
};

window.onclick = function (event) {
  if (event.target == myImg) {
    myImg.style.display = "none";
  }
};
