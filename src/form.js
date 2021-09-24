const constants = require('./constants');
const display = require('./display');

let form = document.getElementById('person_data');

let output_type = null;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    display.display(output_type, form.elements);
});

let button_html = document.getElementById('button_html');
button_html.addEventListener('click', () => {
    output_type = constants.HTML;
});
let button_rendered = document.getElementById('button_rendered');
button_rendered.addEventListener('click', () => {
    output_type = constants.RENDERED;
});