const menuBtn = document.querySelector(".menu");
const menu = document.querySelector(".nav-links");
const buttons = document.querySelector(".nav-buttons");

menuBtn.addEventListener("click", () => {
  const visibility = menu.getAttribute("data-visible");

  if (visibility === "false") {
    menuBtn.setAttribute("aria-expanded", true);
    menu.setAttribute("data-visible", true);
    buttons.setAttribute("data-visible", true);
  } else {
    menuBtn.setAttribute("aria-expanded", false);
    menu.setAttribute("data-visible", false);
    buttons.setAttribute("data-visible", false);
  }
});
