const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () => {
  navItems.classList.add('open');
});

closeNavBtn.addEventListener('click', () => {
  navItems.classList.remove('open');
});

// Reset ONLY the menu when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    navItems.classList.remove('open');
  }
});

