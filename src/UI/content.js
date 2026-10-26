import { containerPage, renderFolders } from "./loadFolder.js";
import { formTask } from "./addTask.js";

export function renderPage(data) {
    let title = rendertitle(data.name);
    const container = document.createElement("div");
    container.classList.add("container-btn");
    container.innerHTML = `<button class="btn add-tarea">añadir tarea</button> <button class="btn" id="edite-folder">Editar lista</button> 
    <button class="btn" id="delate-folder">Eliminar lista</button>`
    const añadirTarea = document.createElement("button");
    const btnDelateFolder = document.createElement("button");
    const btnEditeFolder = document.createElement("button");
    containerPage.append(title, container);
}

export function renderTasksForDelate(task) {
    task.forEach(element => {
        const containerTask = document.createElement("div");
        containerTask.classList.add("container-task")
        containerTask.dataset.idtask = element.id;
        containerTask.innerHTML = `<div class="content-task"><h3>${element.title}</h3> <p>descripción: ${element.description}</p> 
        <p>fecha limite: ${element.dueDate}</p></div> <div class="btn-task"><button class="delate">Eliminar</button><button class="SwitchStatus">cambiar estado</button>
        <button class="edit">Editar</button></div>`
        containerPage.append(containerTask);
        CompletePriority(containerTask, element)
    });
}

function renderTasks(task, name) {
    let title = rendertitle(name)
    containerPage.append(title)
    task.forEach(element => {
        const containerTask = document.createElement("div");
        containerTask.classList.add("container-task")
        containerTask.dataset.idtask = element.id;
        containerTask.innerHTML = `<div class="content-task"><h3>${element.title}</h3> <p>descripción: ${element.description}</p> 
        <h4>carpeta: ${element.folderName}</h4> <p>fecha limite: ${element.dueDate}
        </p></div><div class="btn-task"> <button class="delate">Eliminar</button><button class="SwitchStatus">cambiar estado</button>
        <button class="edit">Editar</button></div>`
        containerPage.append(containerTask);
        CompletePriority(containerTask, element)
    });
}

export function CompletePriority(container, element) {
    if (element.complete) {
        container.classList.add("complete")
    } else {
        container.classList.remove("complete")
    }
    if (element.priority === "low") {
        container.classList.add("lowPriority")
    } else if (element.priority === "medium") {
        container.classList.add("mediumPriority")
    } else if (element.priority === "high") {
        container.classList.add("highPriority")
    }
}

export function renderfordelate(element) {
    containerPage.innerHTML = "";
    console.log(element)
    renderPage(element);
    renderTasksForDelate(element.getAllTask());
}

export function rendertitle(data) {
    const title = document.createElement("h2");
    console.log(data)
    title.textContent = data;
    return title;
}

export function showTask(date, title) {
    containerPage.innerHTML = "";
    renderTasks(date, title)
}


export function showDefault(title) {
    containerPage.innerHTML = "";
    renderFolders();
    renderPage(title)
}

export function htmlData(e) {
    containerPage.dataset.page = e.target.dataset.id;
    containerPage.dataset.name = e.target.textContent;
    containerPage.dataset.id = e.target.dataset.id;
    formTask.dataset.id = e.target.dataset.id;
}