import { containerPage } from "./loadFolder.js";

export function renderPage(data) {
    const title = document.createElement("h2");
    const añadirTarea = document.createElement("button");
    añadirTarea.classList.add("add-tarea")
    añadirTarea.textContent = "añadir tarea"
    title.textContent = data.name;
    console.log(title)
    containerPage.append(title, añadirTarea);
}