console.log("faq");

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqButton = document.querySelectorAll('.faq-button');
const text = document.querySelector('.faq-text');

faqButton.forEach(button => {
    console.log(button);
    button.addEventListener('click', (event) => {
        if (event.currentTarget) {
            text.classList.add('');
        }
    })
})