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
        const containerTask = document.createElement("div");
        containerTask.classList.add("container-tast")
        containerTask.dataset.idtask = element.id;
        console.log(element.date)
        containerTask.innerHTML = `<h3>${element.title}</h3> <p>${element.description}</p> 
        <h4>${element.priority}</h4> <p>${element.dueDate}</p> <button class="delate">Eliminar</button>`
        containerPage.append(containerTask);
    });
}


export function renderfordelate(element) {
    containerPage.innerHTML = "";
    renderPage(element);
    renderTasks(element.getAllTask());
}