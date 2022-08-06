
export default function contact() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    container.appendChild(contactContainer);

    const contactHead = document.createElement('h1');
    contactHead.classList.add('contact-head');
    contactHead.textContent = "Contact Us";
    contactContainer.appendChild(contactHead);

    const contactText = document.createElement('div');
    contactText.classList.add('contact-text-container');
    contactContainer.appendChild(contactText);

    const contactPhone = document.createElement('p');
    contactPhone.classList.add('contact-text');
    contactPhone.textContent = "(123) 456-7890";
    contactText.appendChild(contactPhone);

    const contactLocation = document.createElement('p');
    contactLocation.classList.add('contact-text');
    contactLocation.textContent = "231, Paire Summit, JF"
    contactText.appendChild(contactLocation);
}