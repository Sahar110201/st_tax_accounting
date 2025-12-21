const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () => {
  navItems.classList.add('open');
  openNavBtn.classList.add('rotate');
});

closeNavBtn.addEventListener('click', () => {
  navItems.classList.remove('open');
  openNavBtn.classList.remove('rotate');
  closeNavBtn.classList.add('rotate');

  setTimeout(() => {
    closeNavBtn.classList.remove('rotate');
  }, 400);
});

// Reset nav if resized to >600px
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    navItems.classList.remove('open');
    openNavBtn.classList.remove('rotate');
    closeNavBtn.classList.remove('rotate');
  }
});

//TESTIMONIALS SECTION (Swipper Slide JS)
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  speed: 1200,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  on: {
    init: function () {
      // Add hover listeners to each slide
      this.slides.forEach(slide => {
        slide.addEventListener("mouseenter", () => {
          swiper.autoplay.stop();
          slide.classList.add("hovered");
        });
        slide.addEventListener("mouseleave", () => {
          swiper.autoplay.start();
          slide.classList.remove("hovered");
        });
      });
    }
  }
});






