const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const closeButton = document.querySelector(".btn-close");

const changeValues = () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    navToggle.setAttribute("data-visible", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    navToggle.setAttribute("data-visible", false);
  }
};

navToggle.addEventListener("click", changeValues);
closeButton.addEventListener("click", changeValues);
