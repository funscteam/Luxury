const navMenu = document.getElementById('nav-menu');
    navToggle = document.getElementById('nav-toggle');
    navClose  = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*  REMOVE MENU MOBILE */

const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));


const swiperHome = new Swiper('.home__swiper', {
    // Optional parameters
    
    loop: true,
    speed: 800,
    parallax: true,
    effect: 'fade',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',

      formatFractionCurrent: (number) => { return '0' + number},
      formatFractionTotal: (number) => { return '0' + number}
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});