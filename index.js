const myName = "Mazzle";
console.log(myName);

// let length = prompt("What is your Length");
// let breadth = prompt("What is your Breadth");
// let area = parseFloat(length) * parseFloat(breadth);
// let area2 = parseInt(length) * parseInt(breadth);
// console.log(area);
// console.log(area2);

// clw
// write a program that calculate the numbers of seconds in a year
// if 60 secs = 1 min, 60 mins = 1hr, and 24 hrs = 1day

// let oneYear = 365;
// let oneDay = 24;
// let oneHour = 1;
// let oneMin = 60;
// let sec = 60;
// let totalSecs = oneYear * oneDay * oneHour * oneMin * sec;
// console.log(`There are ${totalSecs} seconds in a year!!!`);

// // write a program that asks a user for his/her age and the program should display how old the person would be in the next 15 years

// let userAge = Number(prompt("Whats your Age Please?"));
// let userAgeIn15 = parseInt(userAge + 15);
// console.log(`Hey! you would be ${userAgeIn15} by the next 15 years`);

// open the dropdown and make the caret face upwards
const openDropdownBig = function () {
  document
    .querySelector(".header-dropdown-arrow.small")
    .classList.remove("caret-rotate");
  smalldropdown.classList.add("hide");

  document
    .querySelector(".header-dropdown-arrow")
    .classList.toggle("caret-rotate");
  bigdropdown.classList.toggle("hide");
};

const openDropdownSm = function () {
  bigdropdown.classList.add("hide");
  document
    .querySelector(".header-dropdown-arrow")
    .classList.remove("caret-rotate");

  document
    .querySelector(".header-dropdown-arrow.small")
    .classList.toggle("caret-rotate");

  smalldropdown.classList.toggle("hide");
};

const closeAllDropdowns = function () {
  bigdropdown.classList.add("hide");
  document
    .querySelector(".header-dropdown-arrow")
    .classList.remove("caret-rotate");

  document
    .querySelector(".header-dropdown-arrow.small")
    .classList.remove("caret-rotate");
    smalldropdown.classList.add("hide");
    
    // document.querySelector(".sidebar-dropdown-header");

    sidebardropdownbox2.classList.add("hide");
    sidebardropdownarrow2.classList.remove("caret-rotate");

    sidebardropdownbox.classList.add("hide");
    sidebardropdownarrow.classList.remove("caret-rotate");
};

// first step: open the menu if the hamburger icon is clicked
const openSidebar = function () {
    document.querySelector(".menu-icon").classList.add("hide");
  sidebar.classList.remove("hide");
  transbg.classList.remove("hide");
};

// close the sidebar and background when the close icon is clicked
const closeSidebar = function () {
    document.querySelector(".menu-icon").classList.remove("hide");
  sidebar.classList.add("hide");
  transbg.classList.add("hide");
};

// SIDEBAR DROPDOWNS
const openSidebarDropdown = function () {
    sidebardropdownbox2.classList.add("hide");
    sidebardropdownarrow2.classList.remove("caret-rotate");

    sidebardropdownbox.classList.toggle("hide");
    sidebardropdownarrow1.classList.toggle("caret-rotate");
};

const openSidebarDropdown2 = function () {
    sidebardropdownbox.classList.add("hide");
    sidebardropdownarrow1.classList.remove("caret-rotate");

    sidebardropdownbox2.classList.toggle("hide");
    sidebardropdownarrow2.classList.toggle("caret-rotate");
};