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
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  speed: 1200,
  breakpoints: {
    600: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      const swiperInstance = this;
      const container = swiperInstance.el;

      // Only desktop
      if (window.innerWidth > 1024) {
        container.addEventListener("mouseenter", () => swiperInstance.autoplay.stop());
        container.addEventListener("mouseleave", () => swiperInstance.autoplay.start());

        swiperInstance.slides.forEach(slide => {
          slide.addEventListener("mouseenter", () => slide.classList.add("hovered"));
          slide.addEventListener("mouseleave", () => slide.classList.remove("hovered"));
        });
      }
    }
  }
});


















