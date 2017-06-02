import $ from "jquery";
import RevealOnScroll from "./modules/revealOnScroll";
import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";



//Below we create instances of our constructors defined in our imported modules.
var menu = new MobileMenu();

 new RevealOnScroll($(".feature-item"), "85%");
 new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeader;