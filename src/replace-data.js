const { ipcRenderer } = require("electron")

ipcRenderer.on('data', (event, arg) => {
    console.log(arg) // prints "pong"
    let html = document.getElementById('full-signature');
    html.innerHTML = html.innerHTML.replaceAll('FULL_NAME',arg.name).replaceAll('COMPANY_ROLE',arg.role).replaceAll('PHONE_NUMBER', arg.phone).replaceAll('EMAIL',arg.email);
  })

ipcRenderer.send('display-data');