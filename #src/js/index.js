document.addEventListener('DOMContentLoaded', function()  {
    headerFunctions();
    mobMenu();
})

const headerFunctions = () => {
    const introPT = 130;
    if( document.querySelector('#intro') ) {
        const introPT = Number.parseInt(window.getComputedStyle(document.querySelector('#intro')).paddingTop.replace('px', ''));
    }
    window.addEventListener('scroll', function() {
        background();
    });

    function background() {
        let scrollHeight = window.pageYOffset;
        if(scrollHeight >= introPT-20) {
            document.querySelector('.header').classList.add('scrolled');
        }else{
            document.querySelector('.header').classList.remove('scrolled');
        }
    }
}

const mobMenu = () => {
    const header = document.querySelector('.header');
    const bar = document.querySelector('.bar');
    const menuItems = document.querySelectorAll('.nav .nav__item');

    document.querySelector('.bar').addEventListener('click', function() {
        let cond = header.classList.contains('active-mobile');
        toggle(cond);
    })

    if(window.innerWidth < 769) {
        menuItems.forEach((el) => {
            el.addEventListener('click', function() {
                toggle(true)
            })
        })
    }

    function toggle(cond) {
        if(!cond) {
            header.classList.add('active-mobile');
            bar.classList.add('active-mobile');
        }else{
            header.classList.remove('active-mobile');
            bar.classList.remove('active-mobile');
        }
    }
}