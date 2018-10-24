var navMain = document.querySelectorAll('.header-menu');
var navToggle = document.querySelector('.header-nav__toggle');
var modal = document.querySelector('.modal');
var orderBtn  = document.querySelector('.thing__order');
var cartBtn = document.querySelectorAll('.specification__button');

// Работа главного меню

navToggle.classList.remove('header-nav__toggle--nojs');
navToggle.classList.add('header-nav__toggle--closed');

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

// Работа модального окна

if(modal){modal.addEventListener('click', function(event) {
  event.preventDefault();
    if (modal !== event.target) return;
      modal.classList.remove('modal--show');
      modal.classList.add('modal--hidden');
  });
}

if(cartBtn){
for(var k=0; k < cartBtn.length ; k++){
  cartBtn[k].onclick = function(event) {
    event.preventDefault();
      if (modal.classList.contains('modal--hidden') ) {
        modal.classList.remove('modal--hidden');
        modal.classList.add('modal--show');
      } else {
        modal.classList.add('modal--hidden');
        modal.classList.remove('modal--show');
      }
    };
  }
}
if(orderBtn){orderBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
    if (modal.classList.contains('modal--hidden') ) {
      modal.classList.remove('modal--hidden');
      modal.classList.add('modal--show');
    } else {
      modal.classList.add('modal--hidden');
      modal.classList.remove('modal--show');
    }
  });
}

document.addEventListener("keyup", function (event) {
if (event.keyCode == 27){
  event.preventDefault();
  modal.classList.add('modal--hidden');
  modal.classList.remove('modal--show');
  }
});

// Работ с картой

var map = document.querySelector('.contacts__map-picture');
map.classList.remove('contacts__map-picture--no-js');

ymaps.ready(function () {

    var myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 10,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {},
        { iconLayout: 'default#image',
          iconImageHref: 'img/icon-map-pin.svg',
          iconImageSize: [66, 101],
          iconImageOffset: [-1, -1] });

    myMap.geoObjects.add(myPlacemark);
});
