import { containerPage } from "./loadFolder.js";
import { converElement, load, loadId } from "../storage/load.js";
import { renderPage, renderTasks, renderfordelate, showAllTask, showTaskToday } from "./content.js";
import { save } from "../storage/save.js";
import { folder } from "../models/folder.js";
import { obtainTask } from "./taskStatus.js";
import { btnFilterAll, btnFilterComplete, btnFilterToday, obtainTitle } from "./filter.js";
import { filterAll, createDate,filterComplete } from "./filterTasks.js";

export function delateTasks(element, id) {
    element.removeTask(id);
}

containerPage.addEventListener("click", (e) => {
    if (e.target.classList.contains("delate")) {
        let element = e.target.closest(".container-task");
        let id = element.dataset.idtask;
        let folders = converElement(load());
        let idFolder = obtainTask(id, folders)
        let elementFolderUNique = loadId(folders, idFolder.folder);
        delateTasks(elementFolderUNique, idFolder.id)
        save(folders)
        renderfordelate(elementFolderUNique)
        if (containerPage.dataset.page === "filterToday") {
            console.log("esto es createDate: ")
            console.log(createDate());
            let title = obtainTitle(btnFilterToday);
            showTaskToday(createDate(), title);
            console.log("esto es createDate: ")
            console.log(createDate());
        } else if (containerPage.dataset.page === "filterComplete") {
            let title = obtainTitle(btnFilterComplete);
            showTaskToday(filterComplete(), title);
        } else if (containerPage.dataset.page === "filterAll") {
            let title = obtainTitle(btnFilterAll);
            showAllTask(filterAll(), title);
        }
    }
})

