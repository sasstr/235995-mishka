var navMain = document.querySelectorAll('.header-menu');
var navToggle = document.querySelector('.header-nav__toggle');

for (var j=0; j < navMain.lenght; j++) {
  navMain[j].classList.remove('header-menu--nojs');
}

navToggle.addEventListener('click', function() {
  for (var i=0; i < navMain.lenght; i++){
      if (navMain[i].classList.contains('header-menu--closed')) {
      navMain[i].classList.remove('header-menu--closed');
      navMain[i].classList.add('header-menu--opened');
    } else {
      navMain[i].classList.add('header-menu--closed');
      navMain[i].classList.remove('header-menu--opened');
    }
  }
});

var orderBtn  = document.querySelector('.thing__order');
var modal = document.querySelector('.modal');

orderBtn.addEventListener('click', function() {
  event.preventDefault();
  if (modal.classList.contains('modal--hidden') ) {
    modal.classList.remove('modal--hidden');
    modal.classList.add('modal--show');
  } else {
    modal.classList.add('modal--hidden');
    modal.classList.remove('modal--show');
  }
});
