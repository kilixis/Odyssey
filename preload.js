const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path');

function getTemplateData(templateName) {
  const filePath = path.join(__dirname, 'templates.json');
  const allTemplates = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return allTemplates[templateName];
}

contextBridge.exposeInMainWorld('templateAPI', {
  getTemplate: getTemplateData
});