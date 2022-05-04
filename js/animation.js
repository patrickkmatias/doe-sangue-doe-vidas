/* arquivo principal de animações em js */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let wrapper = document.querySelector('.wrapper');

let tl = gsap.timeline({
    delay: 1,
    onComplete: function(){
        wrapper.classList.add('active');
    }

    /* document.getElementById("myH1").setAttribute <- adicionar atributo autoplay ao video ao terminar */
});

/* animação de entrada ao site - .wrapper (comente div.wrapper para desativar) */
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
    opacity: 0,
    onStart: function(){
        document.getElementById("video").autoplay = true;
        document.getElementById("video").load();
    }
})

/* animação botão tabela */
let btn = document.getElementById('btnTabela');
let tabela = document.getElementById('tabela');
let fechar = document.querySelector('.fechar');

btn.onclick = function(){
    btn.classList.add('active');
    tabela.classList.add('active');
    fechar.classList.add('active');

}

fechar.onclick = function(){
    btn.classList.remove('active');
    tabela.classList.remove('active');
    fechar.classList.remove('active');
}


/* navegação */

function oque(){
    gsap.to(window, {
        duration: 2,
        ease: 'power1.inOut', 
        scrollTo: {
            y: '.sobre', 
            offsetY: (document.querySelector('.sobre').offsetHeight * 0.3)
        }
    });
};

function etapas(){
    gsap.to(window, {
        duration: 2,
        ease: 'power1.inOut', 
        scrollTo: {
            y: '#etapas', 
            offsetY: (document.querySelector('#etapas').offsetHeight * 0.2)
        },
    });
};

function doadores(){
    gsap.to(window, {
        duration: 2,
        ease: 'power1.inOut', 
        scrollTo: {
            y: '#doadores', 
            offsetY: (document.querySelector('#doadores').offsetHeight * 0.2)
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

