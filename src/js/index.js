import '../scss/main.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';

document.querySelector('.js-hamburger').addEventListener('click', function() {
  this.classList.toggle('is-active');

  document.querySelector('.js-offcanvas').classList.toggle('c-offcanvas--open');
});
