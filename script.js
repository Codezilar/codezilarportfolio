// nav script
// hamburger menu

const body = document.querySelector('body');
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const linkss = document.querySelectorAll('.linkss');
const toogles = document.querySelectorAll('.toogles');


window.addEventListener('scroll', function(){
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)  
    linkss.forEach(lin => {
        if(window.scrollY > 0){
            lin.style.color = 'var(--black)';
            toogles.forEach(toog => {
                toog.style.color = 'var(--black)'
            });
            
        }else{
            lin.style.color = 'var(--white)';
            toogles.forEach(tooge => {
                tooge.style.color = 'var(--white)'
            });
            if(document.body.clientWidth <= 769){
                menu.style.display = 'none';
                menuBtn.style.display = 'block';
                closeBtn.style.display = 'none';
            }
        }
    });
})


menuBtn.addEventListener('click', () =>{
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
    linkss.forEach(liner => {
        liner.style.color = 'var(--black)'; 
    })
});

closeBtn.addEventListener('click', function(){
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});

// dark and light mode script

const Dark = document.querySelector('.Dark');
const Light = document.querySelector('.Light');

Dark.addEventListener('click', function(){
    body.classList.add('dark-mode');
    Dark.style.display = 'none';
    Light.style.display = 'block';

})

Light.addEventListener('click', function(){
    body.classList.remove('dark-mode');
    Light.style.display = 'none';
    Dark.style.display = 'block';
})

// slider

$(document).ready (function() {

    let navText =["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i> "]
    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: false
    }) 
})

// about me btn 

const aboutBtn = document.querySelector('#about-btn');
const moreAbout = document.querySelector('.more_about');
const aboutClose = document.querySelector('#about-close');
aboutBtn.onclick = () =>{
    moreAbout.style.display = 'block';
    aboutBtn.style.display = 'none';
    aboutClose.style.display = 'block';
}
aboutClose.onclick = () =>{
    moreAbout.style.display = 'none';
    aboutBtn.style.display = 'block';
    aboutClose.style.display = 'none';
}

// show or hide skill item
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill =>{
    skill.querySelector('.head').addEventListener('click', function(){
        skill.querySelector('.items').classList.toggle('show-item');
    });
});



// shadow nav
// window.onclick = () =>{
//     menu.classList.remove('fa-times');
//     nav.classList.remove('active-bar');
// }

// swipaer js

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 20,
//     effect: "fade",
//     loop: true,
//     grabCursor: true,
//     centerSlides: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         nextEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// })