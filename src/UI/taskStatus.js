import { converElement, load, loadId } from "../storage/load.js";
import { containerPage } from "./loadFolder.js";
import { save } from "../storage/save.js";
import { renderfordelate, renderTasks } from "./content.js";
import { folder } from "../models/folder.js";

//me gustaria canviar esta forma por un metodo en la clase task.

function switchStatus(element, folder, carpeta) {
    element.complete = !element.complete;
    save(folder)
    renderfordelate(carpeta);
}

function obtainData(id) {
    let folders = load();
    let data = converElement(folders);
    let uniqueElement = loadId(data, id);
    return {
        uniqueElement,
        data
    };
}

containerPage.addEventListener("click", (e) => {
    if (e.target.classList.contains("SwitchStatus")) {
        let element = e.target.closest(".container-task");
        let id = element.dataset.idtask;
        let idFolder = containerPage.dataset.page;
        let data = obtainData(idFolder);
        let ultimateData = data.uniqueElement.getTask(id);
        switchStatus(ultimateData, data.data, data.uniqueElement);
    }
})