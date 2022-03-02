const constants = require('./constants');
const display = require('./display');

let form = document.getElementById('person_data');

let output_type = null;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    display.display(output_type, form.elements);
});

let button_gmail = document.getElementById('button_gmail');
button_gmail.addEventListener('click', () => {
    output_type = constants.GMAIL;
});