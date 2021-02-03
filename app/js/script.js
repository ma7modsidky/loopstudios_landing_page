console.log('hello world');
const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', e => {
    e.preventDefault;
    console.log('Hamburger button clicked')

    if (header.classList.contains('open')){
        header.classList.remove('open')
        fadeElements.forEach( element =>{
            element.classList.add('fade-out')
            element.classList.remove('fade-in')
        })
        body.classList.remove('no-scroll')
        
    }else {
        header.classList.add('open')
        fadeElements.forEach( element =>{
            element.classList.add('fade-in')
            element.classList.remove('fade-out')
        })
        body.classList.add('no-scroll')
    }
    
})