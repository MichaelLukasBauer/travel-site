import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(elements, offset) {
    this._itemsToReveal = elements;
    this.hideInitially();
    this.createWaypoints(offset);
  }

  hideInitially() {
    this._itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(offset) {
    this._itemsToReveal.each(function() {
      const currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: () => {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: offset
      });
    });
  }
}

export default RevealOnScroll;
