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
let button_outlook = document.getElementById('button_outlook');
button_outlook.addEventListener('click', () => {
    output_type = constants.OUTLOOK;
});
let button_gmail = document.getElementById('button_gmail');
button_gmail.addEventListener('click', () => {
    output_type = constants.GMAIL;
});