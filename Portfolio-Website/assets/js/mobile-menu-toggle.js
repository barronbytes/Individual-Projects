const NORMAL_MENU = document.querySelector(".nav-toggle");
const MOBILE_MENU = document.querySelector("#mobile-section");

NORMAL_MENU.addEventListener("click", () => {
    const MOBILE_VISIBLE = MOBILE_MENU.getAttribute("data-visible");

    if (MOBILE_VISIBLE === "false") {
        MOBILE_MENU.setAttribute("data-visible", true);
    } else {
        MOBILE_MENU.setAttribute("data-visible", false);
    }

    console.log(MOBILE_VISIBLE);
})