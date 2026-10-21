import { containerPage } from "./loadFolder.js";

export function renderPage(data) {
    console.log(data)
    let title = rendertitle(data.name);
    const añadirTarea = document.createElement("button");
    const btnDelateFolder = document.createElement("button");
    const btnEditeFolder = document.createElement("button");
    btnDelateFolder.id = "delate-folder";
    btnDelateFolder.textContent = "Eliminar lista";
    añadirTarea.classList.add("add-tarea")
    añadirTarea.textContent = "añadir tarea";
    btnEditeFolder.id = "edite-folder";
    btnEditeFolder.textContent = "Editar lista"
    
    containerPage.append(title, añadirTarea, btnEditeFolder, btnDelateFolder);
}

export function renderTasksForDelate(task) {
    task.forEach(element => {
        const containerTask = document.createElement("div");
        containerTask.classList.add("container-task")
        containerTask.dataset.idtask = element.id;
        containerTask.innerHTML = `<h3>${element.title}</h3> <p>descripción: ${element.description}</p> 
        <p>fecha limite: ${element.dueDate}</p> <button class="delate">Eliminar</button><button class="SwitchStatus">cambiar estado</button>
        <button class="edit">Editar</button>`
        containerPage.append(containerTask);
        CompletePriority(containerTask, element)
    });
}

export function renderTasks(task, name) {
    console.log(name)
    let title = rendertitle(name)
    containerPage.append(title)
    task.forEach(element => {
        const containerTask = document.createElement("div");
        containerTask.classList.add("container-task")
        containerTask.dataset.idtask = element.id;
        containerTask.innerHTML = `<h3>${element.title}</h3> <p>descripción: ${element.description}</p> 
        <p>fecha limite: ${element.dueDate}</p> <button class="delate">Eliminar</button><button class="SwitchStatus">cambiar estado</button>
        <button class="edit">Editar</button>`
        containerPage.append(containerTask);
        CompletePriority(containerTask, element)
    });
}

export function renderTasksForAll(task, name) {
    console.log(task)
    let title = rendertitle(name)
    containerPage.append(title)
    task.forEach(element => {
        const containerTask = document.createElement("div");
        containerTask.classList.add("container-task")
        containerTask.dataset.idtask = element.id;
        containerTask.innerHTML = `<h3>${element.title}</h3> <p>descripción: ${element.description}</p> 
        <h4>carpeta: ${element.folderName}</h4> <p>fecha limite: ${element.dueDate}
        </p> <button class="delate">Eliminar</button><button class="SwitchStatus">cambiar estado</button>
        <button class="edit">Editar</button>`
        containerPage.append(containerTask);
        CompletePriority(containerTask, element)
    });
}
export function CompletePriority(container, element) {
    if (element.complete) {
            container.classList.add("complete")
        }else{
            container.classList.remove("complete")
        }
        if (element.priority === "low") {
            container.classList.add("lowPriority")
        }else if (element.priority === "medium") {
            container.classList.add("mediumPriority")
        }else if (element.priority === "high") {
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

export function showTaskToday(date, title) {
    containerPage.innerHTML = "";
    renderTasks(date, title)
}

export function showAllTask(date, title) {
    containerPage.innerHTML = "";
    renderTasksForAll(date, title)
}