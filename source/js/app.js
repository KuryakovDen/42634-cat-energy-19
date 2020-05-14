const toggleButton = document.querySelector('.page-header__toggle');
const menu = document.querySelector('.page-header__navigation');

toggleButton.classList.remove('page-header__toggle--no-js');
menu.classList.remove('page-header__navigation--opened');
menu.classList.add('page-header__navigation--closed');

toggleButton.addEventListener('click', function () {
  if (toggleButton.classList.contains('page-header__toggle--opened')) {
    toggleButton.classList.remove('page-header__toggle--opened');
    toggleButton.classList.add('page-header__toggle--closed');

    menu.classList.add('page-header__navigation--closed');
    menu.classList.remove('page-header__navigation--opened');
  } else {
    toggleButton.classList.add('page-header__toggle--opened');
    toggleButton.classList.remove('page-header__toggle--closed');

    menu.classList.add('page-header__navigation--opened');
    menu.classList.remove('page-header__navigation--closed');
  }
});

const staticMap = document.querySelector('.cooperation__map');
staticMap.classList.add('visually-hidden');

const interactiveMap = document.querySelector('.page-footer__map');
interactiveMap.classList.remove('visually-hidden');
