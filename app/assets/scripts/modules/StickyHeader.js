import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
  constructor() {
    this._siteHeader = $(".site-header");
    this._pageSection = $(".page-section");
    this._headerLinks = $(".primary-nav a");
    this._triggerElement = $(".large-hero__title");
    this.createHeaderWaypoint(this._siteHeader, this._triggerElement);
    this.createPageSectionWaypoints(this._pageSection, this._headerLinks);
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this._headerLinks.smoothScroll();
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

  createPageSectionWaypoints(pageSections, headerLinks) {
    pageSections.each(function() {
      const currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if (direction === "down") {
            const matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          } else {
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if (direction === "up") {
            const matchingHeaderLink = currentPageSection.getAttribute(
              "data-matching-link"
            );
            headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          } else {
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
