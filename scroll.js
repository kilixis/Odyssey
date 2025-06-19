window.addEventListener('DOMContentLoaded', () => {
  if (!window.api) {
    console.error("window.api is not defined");
    return;
  }

  const template = window.api.getTemplate('studyStack');
  renderScroll(template);
});

function renderScroll(template) {
  document.getElementById("scroll-title").innerText = `${template.icon} ${template.title}`;

  const container = document.getElementById("sections");
  container.innerHTML = "";

  template.sections.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section");
    sectionDiv.innerHTML = `<h2>${section.name}</h2>`;

    const ul = document.createElement("ul");
    section.tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerText = task.text;
      if (task.done) li.style.textDecoration = "line-through";

      const notes = document.createElement("ul");
      task.notes.forEach(note => {
        const noteLi = document.createElement("li");
        noteLi.innerText = note;
        noteLi.style.fontSize = "0.9em";
        notes.appendChild(noteLi);
      });

      li.appendChild(notes);
      ul.appendChild(li);
    });

    sectionDiv.appendChild(ul);
    container.appendChild(sectionDiv);
  });
}
