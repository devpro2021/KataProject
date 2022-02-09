import "../scss/style.scss";
import { switchSlider } from "./swiper.js";
import {
  burger,
  closeBtn,
  openMobileMenu,
  closeMobileMenu,
  switchMenu,
} from "./mobile-menu";
import { popups, popupOverlay, contacts, switchPopup } from "./popup";
import { brandsBlock, techBlock, openBtns, openBlock } from "./block-open";
//swiper
switchSlider();
//mobileMenu
switchMenu();
//popup
switchPopup();
//open blocks
openBlock();
