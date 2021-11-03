'use strict';
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.navbar-link');
const overlay = document.querySelector('.overlay2');

const navBtn = function () {
   menuIcon.addEventListener('click', function () {
      console.log('clicked');
      navLinks.classList.toggle('active');
   });
};

navBtn();
