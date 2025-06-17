window.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 300);
});

document.getElementById("academia").addEventListener("click", () => {
    ipcRenderer.send("open-scroll", { template: "academia" });
  });

  document.getElementById("code-stack").addEventListener("click", () => {
    ipcRenderer.send("open-scroll", { template: "code-stack" });
  });

  document.getElementById("persona-journal").addEventListener("click", () => {
    ipcRenderer.send("open-scroll", { template: "persona-journal" });
  });

  document.getElementById("waypoint-journal").addEventListener("click", () => {
    ipcRenderer.send("open-scroll", { template: "waypoint-journal" });
  });

  document.getElementById("reelbook").addEventListener("click", () => {
    ipcRenderer.send("open-scroll", { template: "reelbook" });
  });

  document.getElementById("contract-desk").addEventListener("click", () => {
    ipcRenderer.send("open-scroll", { template: "contract-desk" });
  });