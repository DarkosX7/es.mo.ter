let item = document.querySelector('.nav-hamburger');

item.addEventListener("click", function(){
    document.body.classList.toggle('nav__links-open');
});


let tl = gsap.timeline({ease:"power4.inOut"});

gsap.from(".hero__title",{y:400, opacity:0, duration:1.5, ease:"power4.inOut", stagger: 0.5}).from(".hero__subtitle", {x:300, duration: 2, stagger: 0.2, ease: "Power4.inOut"});

















