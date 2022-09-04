/* 
dynamic nav area
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
  });
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  const puppies = document.getElementsByClassName("menu__link");

  window.addEventListener("scroll", function () {
    let cake = false;
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      const kitty = section.getBoundingClientRect();

      if (kitty.bottom > 200 && kitty.top < screen.availHeight) {
        if (!cake) {
          cake = true;

          puppies[i].classList.add("active");
          section.classList.add("your-active-class");
        } else {
          puppies[i].classList.remove("active");
          section.classList.remove("your-active-class");
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
  console.log("DOM content loaded");
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
