var tl = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#bottle",{
    top: "95%",
    left: "12%",
    rotate: "30deg"
}, 'coffebeans')
tl.to("#coffebeans",{
    top:"160%",
    left: "23%"
}, 'coffebeans')
tl.to("#coffebeans",{
    width: "25%",
    top:"160%",
    right: "10%",
    rotate: "-15deg"
}, 'coffebeans')
tl.to("#bean",{
    top:"130%",
    rotate: "130deg",
    left: "70%"
}, 'coffebeans')
tl.to("#bean2",{
    top:"130%",
    rotate: "130deg",
    left: "0%"
}, 'coffebeans')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to("#coffebeans",{
    width:"28%",
    left: "42%",
    top: "214%"
}, 'bottle')
tl2.to("#coffebeans2",{
    width:"15%",
    left: "35%",
    top: "270%"
}, 'bottle')
tl2.to("#bottle",{
    width:"30%",
    top: "218%",
    left: "35%",
    rotate: "0deg"
}, 'bottle')

