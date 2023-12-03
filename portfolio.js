// Locomotive js - Smooth Scrolling

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    scrollFromAnywhere: true,
    lerp: 0.1,
    multiplier: 1.5,
    getDirection: true,
    reloadOnContextChange: true,
  });

// scroll to target  

// scroll trigger

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// cursor

function minicircle(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

minicircle()


function circlechaptakaro(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        
        xscale = gsap.utils.clamp(.8,1.2, xdiff);
        yscale = gsap.utils.clamp(.8,1.2, ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;
        
        minicircle(xscale,yscale);

    });
}

circlechaptakaro()

// mouse magnet

let mm1 = new MagnetMouse({
    magnet: {
      element: '.nlinks',
      class: 'magnet-mouse-active',
      enabled: true, 
      distance: 25, 
      position: 'center'
    },
    follow: {
        element: '.follow-mouse', 
        class: 'follow-mouse-active' 
      },
    throttle: 10,  
  });

  mm1.init();

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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
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
        scroller: "#main",
    },
    x: 200,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration: 1,
})
//portfolio java script

