

let item = document.querySelector(".nav-hamburger");

item.addEventListener("click", function () {
  document.body.classList.toggle("nav__links-open");
});

// Hero Title and navbar animation at loading 

document, addEventListener("DOMContentLoaded", function () {});
let tl = gsap.timeline();

tl
  .from(".header", { 
    opacity: 0, 
    duration: 1, 
    y: -50, 
    ease: "power4.inOut",
    stagger: 0.2
    })
  
    .from(".hero__title", {
    y: 30,
    duration: 0.5,
    opacity: 0,
    ease: "Power4.inOut",
    })
  
  .from(".hero__subtitle", {
    duration: 1, 
    ease: "Power4.inOut", 
    y: 200, 
    opacity:0, 
    stagger: 0.2
    });

// Second section animation




