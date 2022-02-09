import Swiper, { Pagination, Autoplay } from "swiper";
import "../../node_modules/swiper/modules/pagination/pagination";
import "../../node_modules/swiper/modules/autoplay/autoplay";

Swiper.use([Pagination, Autoplay]);

let catalogSlider = null;

function sliderInit() {
  if (catalogSlider === null) {
    if (document.querySelectorAll(".swiper").length > 0) {
      catalogSlider = new Swiper(".swiper", {
        direction: "horizontal",
        loop: "true",
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }
}
function switchSlider() {
  if (window.innerWidth < 768) {
    sliderInit();
  } else {
    if (catalogSlider)
      catalogSlider.forEach((slider) => {
        slider.destroy();
      });
    catalogSlider = null;
  }
}

export { switchSlider };
