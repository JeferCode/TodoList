import { converElement, load, loadId } from "../storage/load.js";
import { containerPage } from "./loadFolder.js";
import { save } from "../storage/save.js";
import { renderfordelate, renderTasks, showAllTask, showTaskToday } from "./content.js";
import { createDate, filterComplete } from "./filterTasks.js";
import { btnFilterToday, btnFilterComplete, btnFilterAll, obtainTitle } from "./filter.js";

//para el filtro de 7 dias puede ser que sile sumo 1 y es mas que 7 entonses no se pone si es menos si se pone.
//el filtro complete finciona, pero al cambiar el estado, cambia de pagina a la pagina filtro de hoy, por que el data set de complete tambien es filter.

function switchStatus(element, folders) {
    element.complete = !element.complete;
    save(folders);
}

function obtainData() {
    let folders = load();
    let data = converElement(folders);
    return data;
}

containerPage.addEventListener("click", (e) => {
    if (e.target.classList.contains("SwitchStatus") && containerPage.dataset.page === "filterToday") {
        getElements(e);
        let title = obtainTitle(btnFilterToday);
        showTaskToday(createDate(), title);
    } else if (e.target.classList.contains("SwitchStatus") && containerPage.dataset.page === "filterComplete") {
        getElements(e);
        let title = obtainTitle(btnFilterComplete);
        showTaskToday(filterComplete(), title);
    }else if (e.target.classList.contains("SwitchStatus") && containerPage.dataset.page === "filterAll") {
        getElements(e);
        let title = obtainTitle(btnFilterAll);
        showAllTask(filterComplete(), title);
    } else if (e.target.classList.contains("SwitchStatus")) {
        let uniqueElement = getElements(e);
        renderfordelate(uniqueElement);
    }
})


function getElements(e) {
    let element = e.target.closest(".container-task");
    if (!element) {
        return;
    }
    let id = element.dataset.idtask;
    let data = obtainData();
    let task = obtainTask(id, data)
    if (!task) {
        return
    }
    let idFolder = task.folder;
    let uniqueElement = loadId(data, idFolder);
    switchStatus(task, data);
    return uniqueElement;
}

export function obtainTask(id, data) {
    let tasksData = data.flatMap(element => {
        return element.getAllTask();
    });
    let task = tasksData.find(e => e.id === id);
    return task;
}