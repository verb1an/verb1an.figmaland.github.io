document.addEventListener('DOMContentLoaded', function()  {
    headerFunctions();
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