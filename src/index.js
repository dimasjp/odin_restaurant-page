import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css';

function createNav() {
    const content = document.querySelector('#content');
    const nav = document.createElement('nav');
    nav.classList.add('nav-container');
    document.body.appendChild(nav);

    const btnHome = document.createElement('button');
    btnHome.classList.add('nav-button');
    btnHome.textContent = "Home";
    nav.appendChild(btnHome);
    btnHome.addEventListener('click', () => {
        content.innerHTML = '';
        home();
    });

    const btnMenu = document.createElement('button');
    btnMenu.classList.add('nav-button');
    btnMenu.textContent = "Menu";
    nav.appendChild(btnMenu);
    btnMenu.addEventListener('click', () => {
        content.innerHTML = '';
        menu();
    });

    const btnContact = document.createElement('button');
    btnContact.classList.add('nav-button');
    btnContact.textContent = "Contact";
    nav.appendChild(btnContact);
    btnContact.addEventListener('click', () => {
        content.innerHTML = '';
        contact();
    });
}





createNav();
home();