import $ from "jquery";
import RevealOnScroll from "./modules/revealOnScroll";
import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/modal";



//Below we create instances of our constructors defined in our imported modules.
var menu = new MobileMenu();

 new RevealOnScroll($(".feature-item"), "85%");
 new RevealOnScroll($(".testimonial"), "60%");

var modal = new Modal();
var stickyHeader = new StickyHeader;