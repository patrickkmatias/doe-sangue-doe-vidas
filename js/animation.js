/* arquivo principal de animações em js */

let wrapper = document.querySelector('.wrapper');

let tl = gsap.timeline({
    delay: 1,
    onComplete: function(){
        wrapper.classList.add('active');
    }

    /* document.getElementById("myH1").setAttribute <- adicionar atributo autoplay ao video ao terminar */
});

tl.from('.wrapper span',
{
    opacity: 0,
    scale: 1,
    fontSize: '0.9em',

    duration: 1,
    stagger: 1
})
tl.to('.wrapper',
{
    delay: 1,
    duration: 1,
    opacity: 0
})


