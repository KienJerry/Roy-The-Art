const DomId = (id) => {
  return document.getElementById(id);
};

const openManuNavbar = () => {
  DomId("menuNavbar").addEventListener("click", () => {
    DomId("wrapper-offcanvas-bottom").classList.add("active");
  });
};

function layouLogin() {
  location.href = "/src/Auth/SignIn/SignIn.html";
}

const initJavascriptFile = () => {
  openManuNavbar();
};

initJavascriptFile();

const logininput = document.querySelectorAll(".form-item-children .type-input");

logininput.forEach((element) => {
  element.addEventListener("focus", () => {
    element?.nextSibling?.nextSibling?.classList?.add("active");
  });

  element.addEventListener("blur", () => {
    element?.nextSibling?.nextSibling?.classList?.remove("active");
  });
});
