import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
  constructor() {
    this._siteHeader = $(".site-header");
    this._triggerElement = $(".large-hero__title");
    this.createHeaderWaypoint(this._siteHeader, this._triggerElement);
  }

  createHeaderWaypoint(siteHeader, triggerElement) {
    new Waypoint({
      element: triggerElement[0],
      handler: direction => {
        if (direction === "down") {
          siteHeader.addClass("site-header--dark");
        } else {
          siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }
}

export default StickyHeader;
