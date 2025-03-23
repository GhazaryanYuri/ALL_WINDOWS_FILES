const headerNavLinks = document.querySelectorAll(".nav-link");

function linksClasses(links) {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
        link.classList.add("active");
      }
    });
  });
}

linksClasses(headerNavLinks);

// -------------------------------------------------------------------------------

import { coffeeList } from "../Data/coffee-list.js";
import { foodList } from "../Data/food-list.js";
import { candySweetList } from "../Data/candy-sweet-list.js";

const contentLinks = document.querySelectorAll(".contentLink");
const menuContentContainer = document.querySelector(".list-cont");

contentLinks.forEach((contentLink) => {
  menuContentContainer.innerHTML = coffeeList;
  contentLink.addEventListener("click", () => {
    if (contentLink.classList.contains("coffee-list")) {
      menuContentContainer.className = "list-cont coffee-list";
      menuContentContainer.innerHTML = coffeeList;
    } else if (contentLink.classList.contains("food-list")) {
      menuContentContainer.className = "list-cont food-list";
      menuContentContainer.innerHTML = foodList;
    } else if (contentLink.classList.contains("candy-sweet-list")) {
      menuContentContainer.className = "list-cont candy-sweet-list";
      menuContentContainer.innerHTML = candySweetList;
    }
  });
});
