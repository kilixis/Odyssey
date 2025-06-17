const { ipcRenderer } = require('electron');

ipcRenderer.on("load-template", (event, templateName) => {
  loadScrollTemplate(templateName); // this function updates the UI based on the template
});