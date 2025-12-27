document.addEventListener('DOMContentLoaded', function () {
  // --- NAV ---
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
    setTimeout(() => closeNavBtn.classList.remove('rotate'), 400);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      navItems.classList.remove('open');
      openNavBtn.classList.remove('rotate');
      closeNavBtn.classList.remove('rotate');
    }
  });

  // --- SWIPER ---
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 6000, disableOnInteraction: false },
    speed: 1200,
    breakpoints: { 600: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
    pagination: { el: ".swiper-pagination", clickable: true },
    on: {
      init: function () {
        if (window.innerWidth > 1024) {
          this.el.addEventListener("mouseenter", () => this.autoplay.stop());
          this.el.addEventListener("mouseleave", () => this.autoplay.start());
          this.slides.forEach(slide => {
            slide.addEventListener("mouseenter", () => slide.classList.add("hovered"));
            slide.addEventListener("mouseleave", () => slide.classList.remove("hovered"));
          });
        }
      }
    }
  });

  // --- TIMER ---
  const deadline = new Date(2026, 3, 30, 23, 59, 59).getTime();
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
    if (diff < 0) diff = 0;
    const time = {
      days: Math.ceil(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
    Object.keys(time).forEach(unit => {
      if (prev[unit] !== time[unit]) {
        elements[unit].parentElement.classList.add("flip");
        elements[unit].textContent = String(time[unit]).padStart(2, "0");
        setTimeout(() => elements[unit].parentElement.classList.remove("flip"), 600);
        prev[unit] = time[unit];
      }
    });
  }
  updateTimer();
  setInterval(updateTimer, 1000);

  // --- FEATURES ---
  const features = document.querySelectorAll('.feature-item');
  function revealFeatures() {
    const triggerPoint = window.innerHeight * 0.85;
    features.forEach(feature => {
      if (feature.getBoundingClientRect().top < triggerPoint) {
        feature.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', revealFeatures);
  window.addEventListener('load', revealFeatures);

  // --- DATE BLOCKING ---
  const dateInput = document.getElementById("date");
  const errorMsg = document.getElementById("date-error");
  const holidays = [
    "2026-01-01", // New Year's Day
    "2026-02-16", // Family Day
    "2026-04-03", // Good Friday
    "2026-05-18", // Victoria Day
    "2026-07-01", // Canada Day
    "2026-08-03", // Civic Holiday
    "2026-09-07", // Labour Day
    "2026-10-12", // Thanksgiving
    "2026-12-25", // Christmas Day
    // Islamic Holidays (Toronto estimate)
    "2026-04-21", // Eid al-Fitr
    "2026-06-28"  // Eid al-Adha
  ];
  dateInput.min = new Date().toISOString().split("T")[0];
  dateInput.addEventListener("change", () => {
    const value = dateInput.value;
    if (!value) return;
    const day = new Date(value + "T00:00:00").getDay();
    const isWeekend = day === 0 || day === 6;
    const isHoliday = holidays.includes(value);
    if (isWeekend) {
      dateInput.value = "";
      errorMsg.textContent = "Selected date falls on a weekend.";
      errorMsg.style.display = "block";
      errorMsg.style.paddingLeft = "0.4rem";
    } else if (isHoliday) {
      dateInput.value = "";
      errorMsg.textContent = "Selected date is a holiday.";
      errorMsg.style.display = "block";
      errorMsg.style.paddingLeft = "0.4rem";
    } else {
      errorMsg.style.display = "none";
    }
  });
});
