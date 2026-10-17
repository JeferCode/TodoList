import { converElement, load, loadId } from "../storage/load.js";
import { containerPage } from "./loadFolder.js";
import { save } from "../storage/save.js";
import { renderfordelate, renderTasks, showAllTask, showTaskToday } from "./content.js";
import { createDate, filterAll, filterComplete } from "./filterTasks.js";
import { btnFilterToday, btnFilterComplete, btnFilterAll, obtainTitle } from "./filter.js";


function switchStatus(element, folders) {
    element.complete = !element.complete;
    save(folders);
}

export function obtainData() {
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
        showAllTask(filterAll(), title);
    } else if (e.target.classList.contains("SwitchStatus")) {
        let uniqueElement = getElements(e);
        console.log(uniqueElement)
        renderfordelate(uniqueElement);
    }
})

//la carpeta cambia a los filtros, tengo que buscar en que lugar se establece la id de la carpeta para corregirlo.

function getElements(e) {
    console.log("este es element: ")
    let element = e.target.closest(".container-task");
    console.log(element)
    if (!element) {
        return;
    }
    let id = element.dataset.idtask;
    let data = obtainData();
    let task = obtainTask(id, data)
    if (!task) {
        return
    }
    switchStatus(task, data);
    let idFolder = task.folder;
    let uniqueElement = loadId(data, idFolder);
    return uniqueElement;
}

export function obtainTask(id, data) {
    let tasksData = data.flatMap(element => {
        return element.getAllTask();
    });
    let task = tasksData.find(e => e.id === id);
    return task;
}


////////////editar tarea ////////


function editTask(e) {
    let element = e.target.closest(".container-task");
    let id = element.dataset.idtask;
}


