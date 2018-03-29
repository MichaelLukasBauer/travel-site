import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

const mobileMenu = new MobileMenu();
const revealFeaturesOnScroll = new RevealOnScroll($(".feature-item"), "85%");
const revealTestimonialsOnScroll = new RevealOnScroll($(".testimonial"), "60%");
