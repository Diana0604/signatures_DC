const constants = require('./constants');

let displayDiv = document.getElementById('display');
const fs = require('fs');
const filename = './src/html.txt';

let html = null;

fs.readFile(filename,  'utf8', function(err, data) {
    if (err) throw err;
    html = data;
});


function display(display_type, elements){
    new_html = html.replaceAll('FULL_NAME',elements[0].value).replaceAll('COMPANY_ROLE',elements[1].value).replaceAll('PHONE_NUMBER', elements[2].value).replaceAll('EMAIL',elements[3].value);
    if(display_type == constants.HTML){
        displayDiv.innerText = new_html;
    }
    if(display_type == constants.RENDERED){
        displayDiv.innerHTML = new_html;
        console.log('rendered');
    }
}

module.exports.display = display;