import { containerPage } from "./loadFolder.js";

export function renderPage(data) {
    let title = rendertitle(data);
    const añadirTarea = document.createElement("button");
    const btnDelateFolder = document.createElement("button");
    btnDelateFolder.id = "delate-folder";
    btnDelateFolder.textContent = "Eliminar lista";
    añadirTarea.classList.add("add-tarea")
    añadirTarea.textContent = "añadir tarea"
    
    containerPage.append(title, añadirTarea, btnDelateFolder);
}

export function renderTasks(task) {
    console.log("este es task: ")
    console.log(task)
    task.forEach(element => {
        const containerTask = document.createElement("div");
        containerTask.classList.add("container-task")
        containerTask.dataset.idtask = element.id;
        containerTask.innerHTML = `<h3>${element.title}</h3> <p>${element.description}</p> 
        <h4>${element.priority}</h4> <p>${element.dueDate}</p> <button class="delate">Eliminar</button><button class="SwitchStatus">cambiar estado</button>`
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
    renderPage(element);
    renderTasks(element.getAllTask());
}

export function rendertitle(data) {
    const title = document.createElement("h2");
    title.textContent = data.name;
    return title;
}

export function showTaskToday(date) {
    containerPage.innerHTML = "";
    renderTasks(date)
}