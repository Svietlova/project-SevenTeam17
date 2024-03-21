import Accordion from 'accordion-js';

const container = document.querySelector('.accordion-container');
const accordion = new Accordion(container, {
    duration: 400,
    showMultiple: true,
})