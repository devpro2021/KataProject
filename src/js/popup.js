const popups = document.querySelectorAll(".popup");
const popupOverlay = document.querySelector(".popup-overlay");
const contacts = document.querySelectorAll(".contacts");

let switchPopup = function () {
  contacts.forEach((contact) => {
    let children = contact.children;
    [...children].forEach((button) => {
      button.addEventListener("click", function (e) {
        let path = e.currentTarget.getAttribute("data-path");
        popups.forEach((popup) => {
          popup.classList.remove("popup--visible");
        });
        document
          .querySelector(`[data-target="${path}"]`)
          .classList.add("popup--visible");
        popupOverlay.classList.add("popup-overlay--visible");
        document.body.style.overflow = "hidden";
      });
    });
  });

  popupOverlay.addEventListener("click", (e) => {
    if (e.target == popupOverlay) {
      popups.forEach((popup) => {
        popupOverlay.classList.remove("popup-overlay--visible");
        popup.classList.remove("popup--visible");
        document.body.removeAttribute("style");
      });
    }
  });
  popups.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (e.target.matches(".popup__close-btn")) {
        popupOverlay.classList.remove("popup-overlay--visible");
        popup.classList.remove("popup--visible");
        document.body.removeAttribute("style");
      }
    });
  });
};

export { popups, popupOverlay, contacts, switchPopup };
