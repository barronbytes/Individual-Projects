const mobileMenu = document.querySelector("#mobile-section");
const buttonOpen = document.querySelector(".toggle-open");
const buttonClose = document.querySelector(".toggle-close");

buttonOpen.addEventListener("click", showMobileMenu);
buttonOpen.addEventListener("keydown", showMobileMenu);
buttonClose.addEventListener("click", hideMobileMenu);
buttonClose.addEventListener("keydown", hideMobileMenu);

function showMobileMenu(event) {
  // Check for click, Enter key, or Space key
  if (event.type === "click" || event.key === "Enter" || event.key === " ") {
    mobileMenu.setAttribute("data-visible", "true");
  }
}

function hideMobileMenu(event) {
  // Check for click, Enter key, or Space key
  if (event.type === "click" || event.key === "Enter" || event.key === " ") {
    mobileMenu.setAttribute("data-visible", "false");
  }
}