const DomId = (id) => {
  return document.getElementById(id);
};

const openManuNavbar = () => {
  DomId("menuNavbar").addEventListener("click", () => {
    DomId("wrapper-offcanvas-bottom").classList.add("active");
  });
};

function layouRegister() {
  location.href = "/src/Auth/Register/Register.html";
}
function forgotPassword() {
  location.href = "/src/Auth/ForgotPass/ForgotPassWord.html";
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
