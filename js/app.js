/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/* 
dynamic nav area
want to use queries selectors tags to find the location 
then addhtml and append and all that jazz 
things to add -ul -li -ancor
*/
const dynamicNav = document.getElementById("navbar__list");

const sections = document.querySelectorAll("[data-nav]");
// console.log(sections);

/*lazy list loop
make a for loop to create the '4 sections' li and anchors 
*/
function navBuild() {
  sections.forEach((section) => {
    const list = document.createElement("li");
    const anchor = document.createElement("a");
    const sectionId = section.getAttribute("id");
    anchor.setAttribute("href", "#" + sectionId);
    anchor.setAttribute("class", "menu__link");
    anchor.innerHTML = ` ${sectionId}`;
    list.append(anchor);
    dynamicNav.appendChild(list);
    // console.log(anchor);
  });
}
// for (let i = 0; i < sections.length; i++) {
//   console.log(sections[i]);
//   const anchor = document.createElement("a");
//   anchor.setAttribute("href", sections
// }

// Add class 'active' to section when near top of viewport
function makeActive() {
  const puppies = document.getElementsByClassName("menu__link");

  window.addEventListener("scroll", function () {
    let cake = false;
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      const kitty = section.getBoundingClientRect();
      //console.log(i, section, kitty);
      if (kitty.bottom > 200 && kitty.top < screen.availHeight) {
        if (!cake) {
          cake = true;
          // console.log(i, section, kitty);
          //q = { i, section, kitty };
          //window.section = section;
          //window.kitty = kitty;
          puppies[i].classList.add("active");
        } else {
          puppies[i].classList.remove("active");
        }
      } else {
        puppies[i].classList.remove("active");
      }
    }
  });
}

// Scroll to anchor ID using scrollTO event
function sectionScrollTo() {
  const navLink = document.querySelectorAll(".menu__link");
  navLink.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = e.target;
      const anchorEL = document.querySelector(target.getAttribute("href"));
      scrollBy({
        top: anchorEL.getBoundingClientRect().top,
        behavior: "smooth",
      });
    });
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu done
document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  console.log("wassup");
  navBuild();
});
// Scroll to section on link click done
document.addEventListener("click", function (e) {
  sectionScrollTo(e);
});
// Set sections as active done
document.addEventListener("scroll", function (e) {
  makeActive(e);
});

// form not working
const form = document.querySelector("#form");
const card = document.querySelector(".valCard");
console.log(card);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  card.style.display = "block";
  setTimeout(() => {
    card.style.display = "none";
  }, 5000);
});
