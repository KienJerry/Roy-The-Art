const DomId = (id) => {
  return document.getElementById(id);
};

const openManuNavbar = () => {
  DomId("menuNavbar").addEventListener("click", () => {
    DomId("wrapper-offcanvas-bottom").classList.add("active");
    DomId("wrapper-footer").classList.add("active");
  });
};
const closeManuNavbar = () => {
  DomId("hideMenuNavbar").addEventListener("click", () => {
    DomId("wrapper-offcanvas-bottom").classList.remove("active");
    DomId("wrapper-footer").classList.remove("active");
  });
};
const openNavMenu = () => {
  DomId("btnNavMenu").addEventListener("click", () => {
    DomId("tab-wrapper-body").classList.add("active");
    DomId("wrapper-footer").classList.add("active");
    DomId("show-tab-wrapper-body-nav").classList.add("active");
    DomId("show-tab-bg-body-nav").classList.remove("activeHide");
  });
};
window.onclick = function (event) {
  if (event.target == DomId("show-tab-bg-body-nav")) {
    DomId("show-tab-bg-body-nav").classList.add("activeHide");
    DomId("tab-wrapper-body").classList.remove("active");
    DomId("wrapper-footer").classList.remove("active");
    DomId("show-tab-wrapper-body-nav").classList.remove("active");
  }
};

const initJavascriptFile = () => {
  openManuNavbar();
  closeManuNavbar();
  openNavMenu();
};

initJavascriptFile();
