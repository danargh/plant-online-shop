// let $ = require("jquery");
import * as $ from "jquery";
// let L = require("leaflet");
// module jquery

// ACCORDION
const accordionItems = document.querySelectorAll(".accord__items");

accordionItems.forEach((item) => {
   const accordionHeader = item.querySelector(".accord__button");

   accordionHeader.addEventListener("click", () => {
      const openItem = document.querySelector(".accord__content--open");

      toggleItem(item);

      if (openItem && openItem !== item) {
         toggleItem(openItem);
      }
   });
});

const toggleItem = (item) => {
   const accordionContent = item.querySelector(".accord__text");

   if (item.classList.contains("accord__content--open")) {
      accordionContent.removeAttribute("style");
      item.classList.remove("accord__content--open");
   } else {
      accordionContent.style.height = accordionContent.scrollHeight + "px";
      item.classList.add("accord__content--open");
   }
};

// MAPS
let map = L.map("contact-us__maps").setView([51.505, -0.09], 13);
L.tileLayer(
   "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=yV54Ll0lWZg3f0S6ceFN",
   {
      attribution:
         '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
   }
).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
