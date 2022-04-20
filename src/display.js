const constants = require("./constants");
const fs = require("fs");
const database = require('./database.js');

// In renderer process (web page).
const ipc = require("electron").ipcRenderer;
var select = document.getElementById("company");

function display(display_type, elements) {
  if (select.value == "DC") {
    if (display_type == constants.HTML) {
      database.getFromDatabase('displayHtml', 'DC').then((content) => {
        ipc.send("load-page-content", {
          content: content,
          data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        }
        });
      });
    }
    if (display_type == constants.OUTLOOK) {
      database.getFromDatabase('outlook', 'DC').then((content) => {
        ipc.send("load-page-content", {
          content: content,
          data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        }
        });
      });
    }
    if (display_type == constants.GMAIL) {
      database.getFromDatabase('html', 'DC').then((content) => {
        ipc.send("load-page-content", {
          content: content,
          data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        }
        });
      });
    }
  }

  if (select.value == "EB") {
    if (display_type == constants.HTML) {
      database.getFromDatabase('displayHtml', 'EB').then((content) => {
        ipc.send("load-page-content", {
          content: content,
          data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        }
        });
      });
    }
    if (display_type == constants.OUTLOOK) {
      database.getFromDatabase('outlook', 'EB').then((content) => {
        ipc.send("load-page-content", {
          content: content,
          data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        }
        });
      });
    }
    if (display_type == constants.GMAIL) {
      database.getFromDatabase('html', 'EB').then((content) => {
        ipc.send("load-page-content", {
          content: content,
          data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        }
        });
      });
    }
  }
}

module.exports.display = display;
