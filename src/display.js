const constants = require("./constants");
const fs = require("fs");
const database = require('./database.js');

// In renderer process (web page).
const ipc = require("electron").ipcRenderer;
var select = document.getElementById("company");

//database.populate();

function display(display_type, elements) {
  if (select.value == "DC") {
    if (display_type == constants.HTML) {
      ipc.send("load-page", {
        page: "./src/html/DC/only_html.html",
        data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        },
      });
    }
    if (display_type == constants.OUTLOOK) {
      ipc.send("load-page", {
        page: "./src/html/DC/outlook.html",
        data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        },
      });
    }
    if (display_type == constants.GMAIL) {
      ipc.send("load-page", {
        page: "./src/html/DC/signature.html",
        data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        },
      });
    }
  }

  if (select.value == "EB") {
    if (display_type == constants.HTML) {
      ipc.send("load-page", {
        page: "./src/html/EB/only_html.html",
        data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        },
      });
    }
    if (display_type == constants.OUTLOOK) {
      ipc.send("load-page", {
        page: "./src/html/EB/outlook.html",
        data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        },
      });
    }
    if (display_type == constants.GMAIL) {
      ipc.send("load-page", {
        page: "./src/html/EB/signature.html",
        data: {
          name: elements[0].value,
          role: elements[1].value,
          phone: elements[2].value,
          email: elements[3].value,
        },
      });
    }
  }
}

module.exports.display = display;
