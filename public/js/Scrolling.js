gsap.registerPlugin(ScrollTrigger)
const horizontalSections = gsap.utils.toArray('article.horizontal')

horizontalSections.forEach(function (sec, i) {

    const thisPinWrap = sec.querySelector('.pin-wrap');
    const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

    const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

    gsap.fromTo(thisAnimWrap, {}, {
        x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
        ease: "none",
        scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: () => "+=" + thisAnimWrap.scrollWidth,
            pin: thisPinWrap,
            invalidateOnRefresh: true,
            scrub: true
        }
    });

});
