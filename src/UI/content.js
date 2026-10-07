import { containerPage } from "./loadFolder.js";

export function renderPage(data) {
    const title = document.createElement("h2");
    const añadirTarea = document.createElement("button");
    const btnDelateFolder = document.createElement("button");
    btnDelateFolder.id = "delate-folder";
    btnDelateFolder.textContent = "Eliminar lista";
    añadirTarea.classList.add("add-tarea")
    añadirTarea.textContent = "añadir tarea"
    title.textContent = data.name;
    containerPage.append(title, añadirTarea, btnDelateFolder);
}

export function renderTasks(task) {
    task.forEach(element => {
        console.log(element)
        const containerTask = document.createElement("div");
        containerTask.classList.add("container-task")
        containerTask.dataset.idtask = element.id;
        containerTask.innerHTML = `<h3>${element.title}</h3> <p>${element.description}</p> 
        <h4>${element.priority}</h4> <p>${element.dueDate}</p> <button class="delate">Eliminar</button><button class="SwitchStatus">cambiar estado</button>`
        containerPage.append(containerTask);
        if (element.complete) {
            containerTask.classList.add("complete")
        }else{
            containerTask.classList.remove("complete")
        }
    });
}


export function renderfordelate(element) {
    containerPage.innerHTML = "";
    renderPage(element);
    renderTasks(element.getAllTask());
    console.log(element.getAllTask())
}