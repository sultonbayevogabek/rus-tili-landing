'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#hamburger');
  const mobileMenuBackdrop = document.querySelector('#menu-backdrop');
  const mobileMenu = document.querySelector('#menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    mobileMenuBackdrop.classList.remove('hidden');
    mobileMenu.classList.remove('left-[-100%]');
    mobileMenu.classList.add('left-0');
  })

  mobileMenuBackdrop.addEventListener('click', () => {
    closeMenu();
  })

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    })
  })

  function closeMenu() {
    mobileMenu.classList.add('left-[-100%]');
    mobileMenuBackdrop.classList.add('hidden');
  }
})