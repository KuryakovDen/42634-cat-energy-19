const toogleButton = document.querySelector('.page-header__toogle');
const menu = document.querySelector('.page-header__navigation');

toogleButton.classList.remove('page-header__toogle--no-js');

toogleButton.addEventListener('click', function () {
  if (toogleButton.classList.contains('page-header__toogle--opened')) {
    toogleButton.classList.remove('page-header__toogle--opened');
    toogleButton.classList.add('page-header__toogle--closed');

    menu.classList.add('page-header__navigation--closed');
    menu.classList.remove('page-header__navigation--opened');
  } else {
    toogleButton.classList.add('page-header__toogle--opened');
    toogleButton.classList.remove('page-header__toogle--closed');

    menu.classList.add('page-header__navigation--opened');
    menu.classList.remove('page-header__navigation--closed');
  }
});
