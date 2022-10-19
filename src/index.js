(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  // FAQ Accordion

  const items = document.querySelectorAll('.faq__item');
  let isTriggerd = false;

  document.addEventListener('mouseover', function (evt) {
    isTriggerd = true;
    let target = evt.target;
    let item = event.target.closest('.faq__item');
    if (!item) return;
    item.classList.remove('hide');
  });

  document.addEventListener('mouseout', function (evt) {
    let target = evt.target;
    let item = event.target.closest('.faq__item');
    if (!item) return;
    item.classList.add('hide');
  });

  document.addEventListener('click', function (evt) {
    if (isTriggerd)
    {
      isTriggerd = false;
      return;
    }
    let target = evt.target;
    let item = event.target.closest('.faq__item');
    if (!item) return;
    item.classList.toggle('hide');
  });

})();

//review

var swiper = new Swiper(".reviews__slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
    },
  },
});
