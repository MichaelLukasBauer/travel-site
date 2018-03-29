import $ from "jquery";

class Modal {
  constructor() {
    this._openModalButton = $(".open-modal");
    this._modal = $(".modal");
    this._closeModalButton = $(".model__close");
    this.events();
  }

  events() {
    // clicking open modal button
    this._openModalButton.click(this.openModal.bind(this));

    // clicking close modal button
    this._closeModalButton.click(this.closeModel.bind(this));

    // pushes the esc key
  }

  openModal() {
    this._modal.addClass("modal--is-visible");
    return false; //prevent scrolling to top
  }

  closeModel() {
    console.log("close model ");
    this._modal.removeClass("modal--is-visible");
  }
}

export default Modal;
