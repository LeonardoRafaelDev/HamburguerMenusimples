const menu = document.querySelector('#menu-mobile');  
const menuLinks = document.querySelector('.menu-nav');  
// Display mobile menu  
const mobileMenu = () =>{  
menu.classList.toggle('is-active')  
menuLinks.classList.toggle('active')  
}  
menu.addEventListener('click', mobileMenu)  
// End mobile menu