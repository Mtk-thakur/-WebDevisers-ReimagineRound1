const scroll = new LocomotiveScroll({
    el: document.querySelector('.deskpage'),
    smooth: true,
    lerp:0.03
});
gsap.from("#leftNav h1 , .inputbox",{
    opacity:0,
    x:150,
    duration:1,
    stagger:0.1
})
gsap.from("#extra6 img",{
    opacity:0,
    y:10,
    duration:1,
    stagger:0.11
})
gsap.from("#lionimg",{
    opacity:0,
    x:300,
    delay:0.3,
    duration:0.9,
    stagger:0.11
})
gsap.from("#text h1 ,#text p ,#text button",{
    opacity:0,
    y:120,
    delay:0.3,
    duration:0.9,
    stagger:0.12
})
var signup = document.querySelector("#signup ")
var full2 = document.querySelector("#close2")
var tl2=gsap.timeline()
tl2.to("#bigbox",{
    top:130,
    // opacity:0
    duration:1
})
tl2.pause()
signup.addEventListener("click",function(){
    tl2.play()
})
full2.addEventListener("click",function(){
    tl2.reverse()
})
var menu = document.querySelector("#shop ")
var full = document.querySelector("#dropshop #close")
var tl=gsap.timeline()
tl.to("#dropshop",{
    right:400,
    duration:0.6
})
tl.from("#dropshop h1",{
    opacity:0,
    x:150,
    duration:0.4,
    stagger:0.1
})
tl.from("#dropshop h2",{
    opacity:0,
    y:150,
    duration:0.2,
    stagger:0.1
})
tl.from("#dropshop p",{
    opacity:0,
    x:150,
    duration:0.2,
    stagger:0.1
})
tl.from("#dropshop #close",{
    opacity:0
})
tl.pause()
menu.addEventListener("click",function(){
    tl.play()
})
full.addEventListener("click",function(){
    tl.reverse()
})
var menu1 = document.querySelector("#discover ")
var full1 = document.querySelector("#dropdiscover #close1")
var tl1=gsap.timeline()
tl1.to("#dropdiscover",{
    right:35,
    duration:0.6
})
tl1.from("#dropdiscover h1",{
    opacity:0,
    x:150,
    duration:0.4,
    stagger:0.1
})
tl1.from("#dropdiscover h2",{
    opacity:0,
    y:150,
    duration:0.2,
    stagger:0.1
})
tl1.from("#dropdiscover p",{
    opacity:0,
    x:150,
    duration:0.2,
    stagger:0.1
})
tl1.from("#dropdiscover #close1",{
    opacity:0
})
tl1.pause()
menu1.addEventListener("click",function(){
    tl1.play()
})
full1.addEventListener("click",function(){
    tl1.reverse()
})

document.addEventListener('DOMContentLoaded', function() {
    const titanicbanner = document.querySelector('#titanicbanner');
    const video = titanicbanner.querySelector('.hover-video');

    titanicbanner.addEventListener('mouseenter', function() {
        video.play();
    });

    titanicbanner.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0;
    });
});