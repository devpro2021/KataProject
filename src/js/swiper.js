import Swiper, { Pagination, Autoplay } from "swiper";
import "../../node_modules/swiper/modules/pagination/pagination";
import "../../node_modules/swiper/modules/autoplay/autoplay";

Swiper.use([Pagination, Autoplay]);

let catalogSlider = null;
const mediaQuerySize = 767;

function catalogSliderInit() {
  if (!catalogSlider) {
    catalogSlider = new Swiper(".swiper", {
      direction: "horizontal",
      loop: "true",
      slidesPerView: 1.2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        360: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        414: {
          slidesPerView: 1.5,
        },
        480: {
          slidesPerView: 1.7,
        },
        580: {
          slidesPerView: 2.2,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
      },
    });
  }
}
function catalogSliderDestroy() {
  if (catalogSlider) {
    catalogSlider.destroy(true, true);
    catalogSlider = null;
  }
}

function switchSlider() {
  let windowWidth = window.innerWidth;
  if (windowWidth <= mediaQuerySize) {
    catalogSliderInit();
  } else {
    catalogSliderDestroy();
  }
}

export { switchSlider };
