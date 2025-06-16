const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  // Open button handler
  const openBtn = document.getElementById("open");
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      console.log("Clicked"); // Confirm button works
      document.body.classList.toggle('menu-open');
      ipcRenderer.send('resize-me-please');
    });
  }

  // Create new scroll button handler
  const newScrollBtn = document.getElementById("newScroll");
  if (newScrollBtn) {
    newScrollBtn.addEventListener('click', () => {
      document.body.classList.add('fade-out');
      
      setTimeout(() => {
        window.location.href = 'createmenu.html';
      }, 300);
    });
  }
});