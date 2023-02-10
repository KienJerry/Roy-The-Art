const modal = document.getElementById("custom-modal");
const btn = document.getElementById("btnMenu");

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const w = window.innerWidth;
if (w > 1025 && modal.style.display == "block") {
  console.log("abc");
  modal.style.display = "none";
}
