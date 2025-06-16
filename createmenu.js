window.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 300);
});