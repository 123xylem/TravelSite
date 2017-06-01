import $ from "jquery";
import RevealOnScroll from "./modules/revealOnScroll";
import MobileMenu from "./modules/MobileMenu";

var menu = new MobileMenu();
 new RevealOnScroll($(".feature-item"), "85%");
  new RevealOnScroll($(".testimonial"), "60%");