
// select DOM (document object model) Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
// const themeButton = document.querySelector('.themeIcon');

// set initial color theme 
// let darkMode = true;

// const toggleTheme = () => {
//     if(darkMode) {
//         themeButton.innerHTML = "🌙";
//         document.querySelector('body').style.backgroundColor = '#fff';
//         darkMode = false; 
//     } else {
//         themeButton.innerHTML = "☀️";
//         darkMode = true;
//     }
// };

// themeButton.addEventListener('click', toggleTheme);

// Set Initial state of menu 
let showMenu = false; 

const toggleMenu = ()=> {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        //set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        // set menu state
        showMenu = false;
    }
};

menuBtn.addEventListener('click', toggleMenu);




