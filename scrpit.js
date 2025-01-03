
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function mouseMoveFollower() {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to(".boundingelem1", {
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
    })
    .from("#herofooter",{
        y:-10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
    })
}



mouseMoveFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var different = 0;
    elem.addEventListener("mouseleave", function (details) {
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: 3,
            duration: 0.5,
        })
    })

    elem.addEventListener("mousemove",function(details){
       var diff = details.clientY - elem.getBoundingClientRect().top;
       different = details.clientX - rotate;
       rotate = details.clientX;
       gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: 3,
        top: diff,
        left: details.clientX,
        rotate: gsap.utils.clamp(-20, 20, different * 0.5),
       })
    });
});
