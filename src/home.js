export default function home() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const heading = document.createElement('div');
    heading.classList.add('head-text');
    container.appendChild(heading);

    const headTitle = document.createElement('h1');
    headTitle.textContent = "DOUBLE-R-DINER";
    heading.appendChild(headTitle);

    const headSub = document.createElement('p');
    headSub.textContent = "Coffee and Pie";
    heading.appendChild(headSub);
}