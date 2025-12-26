//NAV MEDIUM AND SMALL SCREEN JS
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

//Timer JS
// Canada Tax Deadline: April 30, 2026, 23:59:59 Eastern Time
const deadline = new Date(2026, 3, 30, 23, 59, 59).getTime(); // Month 3 = April

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

let prev = {};

function updateTimer() {
  const now = new Date().getTime();
  let diff = deadline - now;

  if (diff < 0) diff = 0; // prevent negative countdown after deadline

  const time = {
    days: Math.ceil(diff / (1000 * 60 * 60 * 24)), // round up to include today
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };

  Object.keys(time).forEach(unit => {
    if (prev[unit] !== time[unit]) {
      elements[unit].parentElement.classList.add("flip");
      elements[unit].textContent = String(time[unit]).padStart(2, "0");
      setTimeout(() => {
        elements[unit].parentElement.classList.remove("flip");
      }, 600);
      prev[unit] = time[unit];
    }
  });
}

// initial call
updateTimer();

// update every second
setInterval(updateTimer, 1000);

//feature js
const features = document.querySelectorAll('.feature-item');

function revealFeatures() {
  const triggerPoint = window.innerHeight * 0.85;

  features.forEach(feature => {
    const top = feature.getBoundingClientRect().top;

    if (top < triggerPoint) {
      feature.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealFeatures);
window.addEventListener('load', revealFeatures);

//Date blocked for Weekends and Holidays in Form.

const dateInput = document.getElementById("date");
const errorMsg = document.getElementById("date-error");

// List of blocked holidays
const holidays = [
  "2025-12-25",
  "2026-01-01",
  "2026-07-01"
];

// Set minimum date (today)
dateInput.min = new Date().toISOString().split("T")[0];

dateInput.addEventListener("change", function () {
  const selected = new Date(this.value);
  const day = selected.getDay(); // 0 = Sunday, 6 = Saturday

  if (day === 0 || day === 6 || holidays.includes(this.value)) {
    this.value = "";
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
});

