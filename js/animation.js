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

    duration: 0.8,
    stagger: 1
})
tl1.to('.wrapper',
{
    delay: 0.8,
    duration: 1,
    opacity: 0,
    onStart: function(){
        document.getElementById("video").autoplay = true;
        document.getElementById("video").load();
    }
})

/* animação slogan */


$(document).ready(desanimateSlogan())

/* para desligar ou ligar a animação, 
acrescente ou remova 'des' ao inicio da função */

function animateSlogan() {

    let pp1 = document.querySelector('.pp1');
    let pp2 = document.querySelector('.pp2');
    let pp3 = document.querySelector('.pp3');

    let tl2 = gsap.timeline({
        delay: 5,
    });


    tl2.to('.pp1', {
        opacity: 1,
        duration: 5,
        onStart: function(){
            pp1.classList.add("animate__fadeInUp")

            gsap.to('.sublime',{
                width: '100%',
                delay: 2,
                ease: 'power4.inOut'
            })
        },
        onComplete: function(){
            pp1.classList.add("animate__fadeOutDown")
        }
    })

    tl2.to('.pp2', {
        opacity: 1,
        duration: 5,
        onStart: function(){
            pp2.classList.add("animate__fadeInUp")

            gsap.to('.pp2 span',{
                delay: 1,
                onStart: function(){
                    document.querySelector('.colorful').classList.add("rainbow")
                }
            })
        },
        onComplete: function(){
            pp2.classList.add("animate__fadeOutDown")
        }
    })

    tl2.to('.pp3', {
        opacity: 1,
        duration: 2,
        onStart: function(){
            pp3.classList.add("animate__fadeInUp")
        },
        onComplete: function(){
            gsap.to('#topo',{transform: 'translateX(-50%) ' + 'scale(1)'})
            gsap.to('#banner>a',{transform: 'translateX(-50%) ' + 'scale(1)'})
        }
    })
    gsap.set('#topo',{y:-300})
    tl2.to(['#topo', '#banner>a'],{
        delay: .5,
        duration: 2,
        opacity: 1
    })
}

function desanimateSlogan(){

    gsap.set('#topo', {
        opacity: 1,
        transform: 'translateX(-50%) ' + 'scale(1)'
    })
    gsap.set('#banner>a', {
        opacity: 1,
        transform: 'translateX(-50%) ' + 'scale(1)'
    })
}

/* entradas de texto */ 

gsap.to('.titleLogo', { 

    scrollTrigger: { 
        trigger: '.titleLogo', 
        start: 'center center', 
        toggleClass: 'animate__fadeInDown',
        once: true, 
        markers: false 
    }, 
    opacity: 1,
    onStart: function(){
        gsap.to('.titleLogo2',{
            delay: 0.3,
            onStart: function(){
            document.querySelector('.titleLogo2').classList.add('animate__fadeInDown')
        }}),
        gsap.to('.iniciativa p',{
            opacity: 1,
            duration: 1,
            delay: 0.8
        })
    }
});

gsap.from('.oProjeto p', {
    scrollTrigger: {
        trigger: '.oProjeto p',
        start: '10% bottom',
        markers: false
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.4,
    ease: 'powerOut'
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


/* slick slider de Como Funciona */
const mediaQuery = window.matchMedia('(max-width: 425px)')

if (mediaQuery.matches) {

    $('#conteudoEtapas').slick({
        arrows: false
    }) 

  }



/* navegação */

function scrollFix(){
    gsap.to(window, {
        duration: 0,
        scrollTo: {
            y: '#banner', 
        }
    });
};

$(document).ready(scrollFix())

function oque(){
    gsap.to(window, {
        duration: 2,
        ease: 'power1.inOut', 
        scrollTo: {
            y: '.iniciativa', 
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

