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
