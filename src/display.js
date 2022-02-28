const constants = require('./constants');
const fs = require('fs');

// In renderer process (web page).
const ipc = require('electron').ipcRenderer;

function display(display_type, elements){
    if(display_type == constants.HTML){
        ipc.send('load-page', {page: './src/html/only_html.html', data: {name: elements[0].value, role: elements[1].value, phone: elements[2].value, email: elements[3].value}});
    }
    if(display_type == constants.OUTLOOK){
        ipc.send('load-page', {page:'./src/html/outlook.html', data: {name: elements[0].value, role: elements[1].value, phone: elements[2].value, email: elements[3].value}});
    }
    if(display_type == constants.GMAIL){
        ipc.send('load-page', {page:'./src/html/signature.html', data: {name: elements[0].value, role: elements[1].value, phone: elements[2].value, email: elements[3].value}});
    }
}

module.exports.display = display;