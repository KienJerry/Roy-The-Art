const DomId = (id) => {
  return document.getElementById(id);
};

const email = document.getElementById("email");

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

const logininput = document.querySelectorAll(".form-item-children .type-input"),
  forms = document.querySelector(".forms-full"),
  links = document.querySelectorAll(".link");

// icon type focus
logininput.forEach((element) => {
  element.addEventListener("focus", () => {
    element?.nextSibling?.nextSibling?.classList?.add("active");
  });

  element.addEventListener("blur", () => {
    element?.nextSibling?.nextSibling?.classList?.remove("active");
  });
});

//Chuyển trang / giao diện
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value.trim();
    if (emailValue == "") {
    } else {
      forms?.classList?.toggle("active"); //Thêm 1 active
    }
  });
});
