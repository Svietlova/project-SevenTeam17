console.log("faq");

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.accordion-container');
const accordion = new Accordion(container, {
    duration: 400,
    showMultiple: true,
})