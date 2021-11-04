// ===== SHOW HEADER MENU =====
const showMenu = (menuId, toggleId, closeId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.onclick = () => {
      menu.classList.add("show-menu");
    };

    close.onclick = () => {
      menu.classList.remove("show-menu");
    };
  }
};
showMenu("header-menu", "header-toggle", "header-close");

// ===== REMOVE HEADER MENU WHEN WE CLICK HEADER-LINK =====
const navLink = document.querySelectorAll(".header__link");
function linkAction() {
  const navMenu = document.getElementById("header-menu");

  // remove header menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;
function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY >= 100
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// ===== SWIPER DISCOVER =====
let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

// ===== VIDEO SECTION ====
const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    // Play Video
    videoFile.play();
    // We Change The Icon
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    // Play Video
    videoFile.pause();
    // We Change The Icon
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
  }
}
videoButton.addEventListener("click", playPause);

function finalVideo() {
  // Video end, icon change
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}
videoFile.addEventListener("ended", finalVideo);

// ===== SCROLL UP ICON =====
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 200
    ? scrollUp.classList.add("show-icon")
    : scrollUp.classList.remove("show-icon");
}
window.addEventListener("scroll", scrollUp);

// ===== SCROLL SECTIONS ACTIVE LINK =====
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
      ? document
          .querySelector(`.header__menu a[href*= ${sectionId} ]`)
          .classList.add("active-link")
      : document
          .querySelector(`.header__menu a[href*= ${sectionId} ]`)
          .classList.remove("active-link");
  });
}
window.addEventListener("scroll", scrollActive);

// ===== DARK/LIGHT MODE =====
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// User selected topic
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
