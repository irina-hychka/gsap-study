gsap.registerPlugin(ScrollTrigger);

const image = document.querySelector('.colors-wrapper');
const filter = document.querySelector('.gaxFilter');

const tl = gsap.timeline().fromTo(image, {
    duration: 10,
    scale: 1,
    x: -100,
    y: -400,
    repeat: -1,
    yoyo: true
}, {
    duration: 10,
    scale: 1.4,
    x: 100,
    y: -100,
    rotation: 360*0.01,
    repeat: -1,
    yoyo: true
})

const tl2 = gsap.timeline().to(filter, {
    scale: 50,
    yoyo: true
})

ScrollTrigger.create({
    trigger: filter,
    animation: tl2,
    pin: true,
    start: 'top',
    end: 'bottom',
    scrub: 1, // I like the 1 sec delay, set to true for exact anime on scroll
    markers: false,
})