const brandsBlock = document.querySelector(".brands-swiper");
const techBlock = document.querySelector(".tech-slider");
const openBtns = document.querySelectorAll(".btn-open");
let access = false;

function tabs(block) {
  let links = block.querySelectorAll(".swiper-slide__link");

  let index;
  if (block === brandsBlock) {
    index = 6;
    if (window.innerWidth >= 1120) {
      index = 8;
    }
  } else {
    index = 3;
    if (window.innerWidth >= 1120) {
      index = 4;
    }
  }
  if (!block.classList.contains("block-show")) {
    for (let i = index; i < links.length; i++) {
      links[i].setAttribute("tabindex", "-1");
      access = false;
    }
  } else {
    block.querySelectorAll(".swiper-slide__link").forEach((link) => {
      link.removeAttribute("tabindex");
      access = true;
    });
  }
}

let openBlock = function () {
  tabs(brandsBlock);
  tabs(techBlock);
  openBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("brands__btn-open")) {
        brandsBlock.classList.toggle("block-show");
        tabs(brandsBlock);
        if (brandsBlock.classList.contains("block-show")) {
          this.classList.add("_active");
          this.textContent = "Скрыть";
        } else {
          this.textContent = "Показать все";
          this.classList.remove("_active");
        }
      } else if (e.target.classList.contains("tech__btn-open")) {
        techBlock.classList.toggle("block-show");
        tabs(techBlock);
        if (techBlock.classList.contains("block-show")) {
          this.classList.add("_active");
          this.textContent = "Скрыть";
        } else {
          this.textContent = "Показать все";
          this.classList.remove("_active");
        }
      }
    });
  });
};
export { brandsBlock, techBlock, openBtns, openBlock };
