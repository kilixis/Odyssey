const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById("open");
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      console.log("Clicked"); // Confirm button works
      document.body.classList.toggle('menu-open');
      ipcRenderer.send('resize-me-please');
    });
  } else {
    console.error("Button not found");
  }
});