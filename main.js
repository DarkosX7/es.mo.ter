let item = document.querySelector('.nav-hamburger');

item.addEventListener("click", function(){
    document.body.classList.toggle('nav__links-open');
});

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true

});

alert('wow');


















