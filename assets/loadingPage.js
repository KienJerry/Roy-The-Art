const DomId = (id) => {
  return document.getElementById(id);
};

const openManuNavbar = () => {
  DomId("menuNavbar").addEventListener("click", () => {
    DomId("wrapper-offcanvas-bottom").classList.add("active");
  });
};

const scrollHorizontal = () => {
  const slider = document.querySelector(".items-menu-collection");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
};

const handleScrollHorizontal = () => {
  const slider = document.querySelector(".items-menu-collection");
  let w = window.innerWidth;
  if (w < 720) {
    DomId("arrowRight").addEventListener("click", () => {
      if (slider.clientWidth < slider.scrollWidth) {
        slider.scrollLeft += 105;
      }
    });

    DomId("arrowLeft").addEventListener("click", () => {
      slider.scrollLeft -= 105;
    });
  } else {
    DomId("arrowRight").addEventListener("click", () => {
      if (slider.clientWidth < slider.scrollWidth) {
        slider.scrollLeft += 250;
      }
    });

    DomId("arrowLeft").addEventListener("click", () => {
      slider.scrollLeft -= 250;
    });
  }
};

function layouLogin() {
  location.href = "../pages/SignIn/SignIn.html";
}

const initJavascriptFile = () => {
  openManuNavbar();
  scrollHorizontal();
  handleScrollHorizontal();
};

initJavascriptFile();
