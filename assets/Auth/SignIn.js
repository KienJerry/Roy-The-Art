const DomId = (id) => {
  return document.getElementById(id);
};

const openManuNavbar = () => {
  DomId("menuNavbar").addEventListener("click", () => {
    DomId("wrapper-offcanvas-bottom").classList.add("active");
  });
};

function layouRegister() {
  location.href = "/pages/Register/Register.html";
}
function forgotPassword() {
  location.href = "/pages/ForgotPassWord/ForgotPassWord.html";
}

function layoutHome() {
  location.href = "/index.html";
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