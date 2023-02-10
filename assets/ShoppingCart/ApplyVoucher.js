const form = document.getElementById("handle-voucher");
const popup = document.getElementById("wapper-popup-country");
const voucher = document.querySelector(".form-voucher");
const btn = document.querySelector(".bg-btn");
const ShowPopup = document.querySelector(".wapper-popup-country");
function handleForm(e) {
  e.preventDefault();
  const input = form.querySelector("input");
  if (input.value !== "") {
    voucher.classList.add("active");
  }
  return false;
}
form.addEventListener("submit", handleForm);

function removeVoucher() {
  const Active = voucher.classList.contains("active");
  if (Active) {
    voucher.classList.remove("active");
  }
}

function handleShowPopups() {
  const Active = ShowPopup.classList.contains("active");
  if (Active === false) {
    ShowPopup.classList.add("active");
  }
  return false;
}

window.onclick = function (event) {
  if (event.target == popup || event.target == btn) {
    ShowPopup.classList.remove("active");
  }
};
