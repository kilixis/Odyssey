const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path');

contextBridge.exposeInMainWorld('api', {
  getTemplate: (templateName) => {
    const filePath = path.join(__dirname, 'templates.json');
    const allTemplates = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return allTemplates[templateName];
  }
});
console.log('✅ Preload script loaded');