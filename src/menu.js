import coffeeImg from './images/raimond-klavins.jpg';
import pieImg from './images/didi-miam.jpg';

export default function menu() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    container.appendChild(menuContainer);

    const menuOne = document.createElement('div');
    menuOne.classList.add('menu-item');
    menuContainer.appendChild(menuOne);

    const menuOneImg = document.createElement('img');
    menuOneImg.src = coffeeImg;
    menuOneImg.classList.add('menu-img');
    menuOne.appendChild(menuOneImg);

    const menuOneText = document.createElement('div');
    menuOneText.classList.add('menu-text');
    menuOne.appendChild(menuOneText);

    const menuOneName = document.createElement('h3');
    menuOneName.textContent = "Black Coffee";
    menuOneText.appendChild(menuOneName);

    const menuOneSub = document.createElement('p');
    menuOneSub.textContent = "\"Black as midnight on a moonless night\"";
    menuOneText.appendChild(menuOneSub);

    const menuTwo = document.createElement('div');
    menuTwo.classList.add('menu-item');
    menuContainer.appendChild(menuTwo);

    const menuTwoImg = document.createElement('img');
    menuTwoImg.src = pieImg;
    menuTwoImg.classList.add('menu-img');
    menuTwo.appendChild(menuTwoImg);

    const menuTwoText = document.createElement('div');
    menuTwoText.classList.add('menu-text');
    menuTwo.appendChild(menuTwoText);

    const menuTwoName = document.createElement('h3');
    menuTwoName.textContent = "Cherry Pie";
    menuTwoText.appendChild(menuTwoName);

    const menuTwoSub = document.createElement('p');
    menuTwoSub.textContent = "\"It'll kill ya\"";
    menuTwoText.appendChild(menuTwoSub);
}