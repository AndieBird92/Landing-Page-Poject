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
const list = document.createElement("li");

const sections = document.querySelectorAll("[data-nav]");
console.log(sections);

/*lazy list loop
make a for loop to create the '4 sections' li and anchors 
*/
sections.forEach((section) => {
  const anchor = document.createElement("a");
  const sectionId = section.getAttribute("id");
  anchor.setAttribute("href", sectionId);
  anchor.innerHTML = ` ${sectionId}`;
  list.append(anchor);
  dynamicNav.appendChild(list);
  console.log(anchor);
});

// for (let i = 0; i < sections.length; i++) {
//   console.log(sections[i]);
//   const anchor = document.createElement("a");
//   anchor.setAttribute("href", sections
// }

// Add class 'active' to section when near top of viewport
//
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
