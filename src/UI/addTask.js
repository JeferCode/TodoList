import { folder } from "../models/folder.js";
import { task } from "../models/task.js";
import { load, loadId } from "../storage/load.js";
import { form } from "./addFolder.js";
import { obtainTask, obtainData } from "./taskStatus.js";
const containerFormTask = document.getElementById("section-form-task");
export const formTask = document.getElementById("form-task");
import { containerPage } from "./loadFolder.js";
import { save } from "../storage/save.js";
import { delateTasks } from "./removeTask.js";
import { fillTaskForm } from "./Edit.js";
export const modal = document.getElementById("modal");

export function addNewTask(data) {
    let elementask = new task(crypto.randomUUID(), data.title, data.description, data.date, data.priority, false, data.folderId, data.folderName);
    return elementask;
}

export function obtainDataTask(form) {
    let folderId = containerPage.dataset.id;
    let folderName = containerPage.dataset.name;
    let data = new FormData(form);
    let title = data.get("title").trim()
    let description = data.get("description").trim()
    let date = data.get("dueDate").trim()
    let priority = data.get("priority")
    if (title !== "" && description !== "" && date !== "") {
        hiddenFormTask();

        return {
            title,
            description,
            date,
            priority,
            folderId,
            folderName
        };
    }
}


containerPage.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-tarea")) {
        formTask.dataset.folder = "";
        visibleFormTask()
    } else if (e.target.classList.contains("edit")) {
        let element = e.target.closest(".container-task");
        fillTaskForm(element);
        visibleFormTask()
    }
})


export function visibleFormTask() {
    modal.classList.remove("hidden")
    containerFormTask.classList.remove("hidden")
}


export function hiddenFormTask() {
    modal.classList.add("hidden")
    containerFormTask.classList.add("hidden")
}
