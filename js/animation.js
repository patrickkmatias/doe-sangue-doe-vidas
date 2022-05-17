/* arquivo principal de animações em js */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let wrapper = document.querySelector('.wrapper');

let tl1 = gsap.timeline({
    delay: 1,
    onComplete: function(){
        wrapper.classList.add('active');
    }
});

/* animação de entrada ao site - .wrapper (comente div.wrapper para desativar) */
tl1.from('.wrapper span',
{
    opacity: 0,
    scale: 1,
    fontSize: '0.9em',

    duration: 1,
    stagger: 1
})
tl1.to('.wrapper',
{
    delay: 1,
    duration: 1,
    opacity: 0,
    onStart: function(){
        document.getElementById("video").autoplay = true;
        document.getElementById("video").load();
    }
})

/* animação slogan */
let pp1 = document.querySelector('.pp1');
let tl2 = gsap.timeline({
    /* delay: 4, */
});


tl2.to('#slogan .pp1', {
    opacity: 1,
    stagger: 1,
    onStart: function(){
        pp1.classList.add("animate__fadeIn")
    },
    onComplete: function(){
        pp1.classList.add("animate__fadeOut")
    }
})


/* animação botão tabela */
let btn = document.getElementById('btnTabela');
let tabela = document.getElementById('tabela');
let fechar = document.querySelector('.fechar');

btn.onclick = function(){
    
    gsap.to('#tabela', {
        transform: 'scale(1) ' + 'translateX(-50%)',
        duration: 1
    })
    gsap.to('.fechar', {
        opacity: '1',
        delay: 0.8,
        duration: 0.2
    })

}

fechar.onclick = function(){
    
    gsap.to('#tabela', {
        transform: 'scale(0) ' + 'translateX(-50%)',
        duration: 1
    })
    gsap.to('.fechar', {
        opacity: '0',
        duration: 0.2
    })
}


/* navegação */

function oque(){
    gsap.to(window, {
        duration: 2,
        ease: 'power1.inOut', 
        scrollTo: {
            y: '.sobre', 
        }
    });
};

function etapas(){
    gsap.to(window, {
        duration: 2,
        ease: 'power1.inOut', 
        scrollTo: {
            y: '#etapas', 
        },
    });
};

function doadores(){
    gsap.to(window, {
        duration: 2,
        ease: 'power1.inOut', 
        scrollTo: {
            y: '#doadores', 
        },
    });
};

function local(){
    gsap.to(window, {
        duration: 2,
        ease: 'power1.inOut', 
        scrollTo: '#local'
    });
};

