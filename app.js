let openMenu = document.querySelector(".open_hamburger_menu");
let closeMenu = document.querySelector(".close_hamburger_menu");
let menu = document.querySelector(".header_menu");
openMenu.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("In");
  document
    .querySelector(".hamburger_container")
    .setAttribute("id", "active_menu");
  closeMenu.setAttribute("id", "active_menu");
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clsoe ");
  document
    .querySelector(".hamburger_container")
    .removeAttribute("id", "active_menu");
  closeMenu.removeAttribute("id", "active_menu");
});
