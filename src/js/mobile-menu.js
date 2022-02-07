const mobileMenu = document.querySelector(".mobile-menu");
const burger = document.querySelector(".menu-burger");
const closeBtn = document.querySelector(".mobile-menu__close-btn");
const overlay = document.querySelector(".mobile-menu-overlay");

function openMobileMenu() {
  overlay.classList.add("show");
  overlay.classList.remove("hide");
  mobileMenu.classList.add("show");
  mobileMenu.classList.remove("hide");
  document.body.style.overflow = "hidden";
}
function closeMobileMenu() {
  overlay.classList.remove("show");
  overlay.classList.add("hide");
  mobileMenu.classList.remove("show");
  mobileMenu.classList.add("hide");
  document.body.removeAttribute("style");
}

let switchMenu = function () {
  burger.addEventListener("click", () => {
    openMobileMenu();
  });
  closeBtn.addEventListener("click", closeMobileMenu);

  overlay.addEventListener("click", (e) => {
    if (mobileMenu.classList.contains("show")) {
      closeMobileMenu();
    }
  });

  Array.from(
    mobileMenu.querySelector(".mobile-menu__contacts").children
  ).forEach((button) => {
    button.addEventListener("click", () => {
      closeMobileMenu();
    });
  });
};
export { burger, closeBtn, openMobileMenu, closeMobileMenu, switchMenu };
