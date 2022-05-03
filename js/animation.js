/* arquivo principal de animações em js */

let wrapper = document.querySelector('.wrapper');

let tl = gsap.timeline({
    onComplete: function(){
        wrapper.classList.add('active');
    }
});

tl.to('.wrapper',
{
    
    duration: 1,
    opacity: 0
})
