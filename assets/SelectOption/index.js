function loadSelectOption(id, inputId, itemsId, selectId, items) {
  const listItemsOption = items
    .map((element) => {
      let result = "";
      result += `<div class="items-option ${selectId}">${element}</div>`;
      return result;
    })
    .join("");
  document.getElementById(id).innerHTML = `<div class="wrapper-select-option">
        <div class="form-input-option">
            <input id="${inputId}" class="input-option" type="text" placeholder="Please choose value!" readonly />
            <img class="ic-down-select" src="../../images/public/ic-down-select.svg" />
        </div>
        <div id="${itemsId}" class="list-items-option">
            ${listItemsOption}
        </div>
    </div>`;

  document.getElementById(inputId).addEventListener("mouseup", () => {
    const itemsOption = document.getElementById(itemsId);
    if (itemsOption.classList.contains("active")) {
      document.getElementById(itemsId).classList.remove("active");
    } else {
      document.getElementById(itemsId).classList.add("active");
    }
  });

  const itemsSelect = document.getElementsByClassName(selectId);
  for (let i = 0; i < itemsSelect.length; i++) {
    itemsSelect[i].addEventListener("click", () => {
      for (let j = 0; j < itemsSelect.length; j++) {
        itemsSelect[j].classList.remove("active");
      }
      itemsSelect[i].classList.add("active");
      document.getElementById(inputId).value = itemsSelect[i].innerHTML;
      document.getElementById(itemsId).classList.remove("active");
    });
  }
}

document.getElementById("handleAddToCart").onclick = function () {
  const x = document.getElementById("wapper-modal-cart");
  let chekcActive = document.querySelector("#wapper-modal-cart");
  if (chekcActive.classList.contains("active")) {
    x.classList.remove("active");
  } else {
    x.classList.add("active");
  }
};

window.onclick = function (event) {
  const x = document.getElementById("wapper-modal-cart");
  const y = document.getElementById("btn-keep-shopping");
  const chekcActive = document.querySelector("#wapper-modal-cart");
  // if (event.target == x || event.target == y) {
  if (event.target == y) {
    if (chekcActive.classList.contains("active")) {
      x.classList.remove("active");
    } else {
      x.classList.add("active");
    }
  }
};

const listDetails = document.getElementById("txt-description-text");
const ArrUp = document.querySelector(".ic-arrow-up");
const ArrDown = document.querySelector(".ic-arrow-down");
function HandleDetail() {
  listDetails.style.display = "none";
  ArrDown.style.display = "none";
  ArrUp.style.display = "block";
  Decription_Detail.style.display = "none";
  listDetailss.style.display = "none";
}
function HandleDetailHide() {
  listDetails.style.display = "block";
  ArrDown.style.display = "block";
  ArrUp.style.display = "none";
  Decription_Detail.style.display = "flex";
}

const listDetailss = document.getElementById("txt-description-texts");
const ArrUps = document.querySelector(".ic-arrow-ups");
const ArrDowns = document.querySelector(".ic-arrow-downs");
const Decription_Detail = document.querySelector(".Decription-Detail");
function HandleDescDetail() {
  listDetailss.style.display = "block";
  ArrUps.style.display = "none";
  ArrDowns.style.display = "block";
}
function HandleDescDetailHide() {
  listDetailss.style.display = "none";
  ArrUps.style.display = "block";
  ArrDowns.style.display = "none";
}

const ArrUpss = document.querySelector(".ic-arrow-upss");
const ArrDownss = document.querySelector(".ic-arrow-downss");
const description = document.querySelector(".box-description-cost");
function HandleShipDetail() {
  description.style.display = "none";
  ArrDownss.style.display = "none";
  ArrUpss.style.display = "block";
}
function HandleShipDetailHide() {
  description.style.display = "flex";
  ArrDownss.style.display = "block";
  ArrUpss.style.display = "none";
}

const Deliver = document.getElementById("Deliver");
const Delivers = document.getElementById("Delivers");
const Deliverss = document.getElementById("Deliverss");
const Ic = document.querySelector(".ic-arrow-downsa");
const Ico = document.querySelector(".ic-arrow-upsa");
function HandleDeliver() {
  Deliver.style.display = "none";
  Delivers.style.display = "none";
  Deliverss.style.display = "none";
  Ico.style.display = "none";
  Ic.style.display = "block";
}
function HandleDeliverHide(){
  Deliver.style.display = "block";
  Delivers.style.display = "flex";
  Deliverss.style.display = "flex";
  Ic.style.display = "none";
  Ico.style.display = "block";
}