// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// mobile menu

let menuIcon = document.querySelector(".nav-bar .fa-bars");
let menu = document.querySelector(".nav-bar .menu");


menuIcon.addEventListener("click", () => {
   menu.classList.toggle('open-menu');
   menuIcon.classList.toggle('close-icon')
});
