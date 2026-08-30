const HamburgerMenu = document.getElementById('hamburger');
const NavMenu = document.getElementById('mobileMenu');
const CloseMenu = document.getElementById('closeMenu') ;

HamburgerMenu.addEventListener('click', () => {
  NavMenu.classList.add('active');
});


CloseMenu.addEventListener('click', () =>{
    NavMenu.classList.remove('active');
} )


window.addEventListener('scroll', () => {
     NavMenu.classList.remove('active');
})