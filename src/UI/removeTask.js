import { containerPage } from "./loadFolder.js";
import { converElement, load, loadId } from "../storage/load.js";
import { renderPage, renderTasks, renderfordelate } from "./content.js";
import { save } from "../storage/save.js";

export function delateTasks(element, id) {
    element.removeTask(id);
}

containerPage.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delate")){
        let element = e.target.closest(".container-task");
        let id = element.dataset.idtask;
        let idFolder = containerPage.dataset.page;
        let folders = converElement(load());
        let elementFolderUNique = loadId(folders, idFolder);
        delateTasks(elementFolderUNique, id)
        renderfordelate(elementFolderUNique)
        save(folders)
    }
})

