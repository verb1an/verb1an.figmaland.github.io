document.addEventListener('DOMContentLoaded', function()  {
    headerFunctions();
    mobMenu();
})

const headerFunctions = () => {
    window.addEventListener('scroll', function() {
        background();
    });

    function background() {
        let scrollHeight = window.pageYOffset;
        if(scrollHeight >= 130) {
            document.querySelector('.header').classList.add('scrolled');
        }else{
            document.querySelector('.header').classList.remove('scrolled');
        }
    }
}

const mobMenu = () => {
    const header = document.querySelector('.header');
    const bar = document.querySelector('.bar');
    document.querySelector('.bar').addEventListener('click', function() {
        let cond = header.classList.contains('active-mobile');
        
        if(!cond) {
            header.classList.add('active-mobile');
        }else{
            header.classList.remove('active-mobile');
        }
    })
}