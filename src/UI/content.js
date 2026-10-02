import { containerPage } from "./loadFolder.js";

export function renderPage(data) {
    const title = document.createElement("h2");
    const añadirTarea = document.createElement("button");
    añadirTarea.classList.add("add-tarea")
    añadirTarea.textContent = "añadir tarea"
    title.textContent = data.name;
    containerPage.append(title, añadirTarea);
}

export function renderTasks(task) {
    task.forEach(element => {
        console.log(element)
        const title = document.createElement("h3");
        const description = document.createElement("p");
        const priority = document.createElement("h4")
        const date = document.createElement("p")
        title.textContent = element.title;
        description.textContent = element.description;
        priority.textContent = element.priority;
        date.textContent = element.date;
        containerPage.append(title, description, priority, date);
    });
}