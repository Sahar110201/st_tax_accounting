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


