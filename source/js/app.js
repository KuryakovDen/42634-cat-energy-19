const toggleButton = document.querySelector('.page-header__toggle');
const menu = document.querySelector('.page-header__navigation');

toggleButton.classList.remove('page-header__toggle--no-js');

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
