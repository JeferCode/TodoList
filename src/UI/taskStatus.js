import { converElement, load, loadId } from "../storage/load.js";
import { containerPage } from "./loadFolder.js";
import { save } from "../storage/save.js";
import { renderfordelate, renderTasks } from "./content.js";
import { folder } from "../models/folder.js";

//necesito cambiar el renderizado de la pagina cuando se cambia el estado de la tarea en el filtro.

function switchStatus(element, folder, carpeta) {
    element.complete = !element.complete;
    save(folder)
    renderfordelate(carpeta);
}

function obtainData() {
    let folders = load();
    let data = converElement(folders);
    return data;
}

containerPage.addEventListener("click", (e) => {
    if (e.target.classList.contains("SwitchStatus")) {
        let element = e.target.closest(".container-task");
        let id = element.dataset.idtask;
        let data = obtainData();
        let task = obtainTask(id, data)
        let idFolder = task.folder;
        let uniqueElement = loadId(data, idFolder);
        console.log(uniqueElement)
        switchStatus(task, data, uniqueElement);
    }
})

function obtainTask(id, data) {
    let tasksData = data.flatMap(element => {
        return element.getAllTask();
    });
    console.log(tasksData)
    let task = tasksData.find(e => e.id === id)
    return task;
}

