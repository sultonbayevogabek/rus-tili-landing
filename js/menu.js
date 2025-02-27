'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#hamburger');
  const mobileMenuBackdrop = document.querySelector('#menu-backdrop');
  const mobileMenu = document.querySelector('#menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    mobileMenuBackdrop.classList.remove('hidden');
    mobileMenu.classList.remove('-translate-x-full');
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
    mobileMenu.classList.add('-translate-x-full');
    mobileMenuBackdrop.classList.add('hidden');
  }
})