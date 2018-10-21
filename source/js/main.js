var navMain = document.querySelectorAll('.header-menu');
var navToggle = document.querySelector('.header-nav__toggle');

for (var j=0; j < navMain.length; j++) {
  navMain[j].classList.remove('header-menu--nojs');
}

navToggle.addEventListener('click', function() {
  for (var i=0; i < navMain.length; i++){
      if (navMain[i].classList.contains('header-menu--closed')) {
      navMain[i].classList.remove('header-menu--closed');
      navMain[i].classList.add('header-menu--opened');
      navToggle.classList.remove('header-nav__toggle--closed');
      navToggle.classList.add('header-nav__toggle--open');
    } else {
      navMain[i].classList.add('header-menu--closed');
      navMain[i].classList.remove('header-menu--opened');
      navToggle.classList.remove('header-nav__toggle--open');
      navToggle.classList.add('header-nav__toggle--closed');
    }
  }
});

var orderBtn  = document.querySelector('.thing__order');
var modal = document.querySelector('.modal');

if(orderBtn){ orderBtn.addEventListener('click', function() {
  event.preventDefault();
  if (modal.classList.contains('modal--hidden') ) {
    modal.classList.remove('modal--hidden');
    modal.classList.add('modal--show');
  } else {
    modal.classList.add('modal--hidden');
    modal.classList.remove('modal--show');
  }
});}
