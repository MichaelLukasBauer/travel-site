import $ from "jquery";

class MobileMenu {
  constructor() {
    this._menuIcon = $(".site-header__menu-icon");
    this._menuContent = $(".site-header__menu-content");
    this._siteHeader = $(".site-header");
    this.events();
  }

  events() {
    this._menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this._menuContent.toggleClass("site-header__menu-content--is-visible");
    this._siteHeader.toggleClass("site-header--is-expanded");
    this._menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;
