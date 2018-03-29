import $ from "jquery";

class Modal {
  constructor() {
    this._openModalButton = $(".open-modal");
    this._modal = $(".modal");
    this._closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // clicking open modal button
    this._openModalButton.click(this.openModal.bind(this));

    // clicking close modal button
    this._closeModalButton.click(this.closeModal.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal() {
    this._modal.addClass("modal--is-visible");
    return false; //prevent scrolling to top
  }

  closeModal() {
    this._modal.removeClass("modal--is-visible");
  }
}

export default Modal;
