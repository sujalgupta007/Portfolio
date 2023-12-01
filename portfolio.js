// Locomotive js - Smooth Scrolling

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// // });
// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll();
// const target = document.querySelector('#main');

// scroll.scrollTo(target);


// gsap to animate

gsap.from("#container", {
    stagger: .1,
    y: -50,
    duration: 1,
    ease: Expo,
    opacity: 0
})

gsap.from(".anima", {
    x: -100,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
    delay: 0.5,
})

gsap.from(".animb", {
    x: -100,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 2,
})

gsap.from(".anim1", {
    scrollTrigger: {
        trigger: ".anim1",
        scroller: "body",
    },
    x: 200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
})

gsap.from("#third", {
    scrollTrigger: {
        trigger: "#third",
        scroller: "body",
    },
    x: -200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
    delay: 0.25,
})
gsap.from("#second", {
    scrollTrigger: {
        trigger: "#second",
        scroller: "body",
    },
    x: -200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
    delay: 0.5,
})
gsap.from("#first", {
    scrollTrigger: {
        trigger: "#first",
        scroller: "body",
    },
    x: -200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
    delay: 0.9,
})

gsap.from(".anim2a", {
    scrollTrigger: {
        trigger: ".anim2a",
        scroller: "body",
    },
    x: -200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
})
gsap.from("#section2", {
    scrollTrigger: {
        trigger: "#section2",
        scroller: "body",
    },
    x: 200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
})
gsap.from("#subsectiona", {
    scrollTrigger: {
        trigger: "#subsectiona",
        scroller: "body",
    },
    y: 200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
    delay: 0.25,
})
gsap.from("#subsectionb", {
    scrollTrigger: {
        trigger: "#subsectionb",
        scroller: "body",
    },
    y: 200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
    delay: 0.45,
})
gsap.from("#subsectionc", {
    scrollTrigger: {
        trigger: "#subsectionc",
        scroller: "body",
    },
    y: 200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
    delay: 0.65,
})

gsap.from(".anim3", {
    scrollTrigger: {
        trigger: ".anim3",
        scroller: "body",
    },
    y: 100,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 2,
})

gsap.from(".anim4", {
    scrollTrigger: {
        trigger: ".anim4",
        scroller: "body",
    },
    y: 200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 2,
})
gsap.from(".anim4a", {
    scrollTrigger: {
        trigger: ".anim4a",
        scroller: "body",
    },
    x: -200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
})
gsap.from(".anim4b", {
    scrollTrigger: {
        trigger: ".anim4b",
        scroller: "body",
    },
    y: -200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
})
gsap.from(".anim4c", {
    scrollTrigger: {
        trigger: ".anim4c",
        scroller: "body",
    },
    y: 200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
})
gsap.from(".anim4d", {
    scrollTrigger: {
        trigger: ".anim4d",
        scroller: "body",
    },
    x: 200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
})

//shery js to animate images accordingly

Shery.imageEffect("#TAL>img", {
    style: 1,
    debug: true,
})

Shery.textAnimate(".anim", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
    debug: true,
});


//portfolio java script

