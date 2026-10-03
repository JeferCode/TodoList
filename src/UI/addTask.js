import { folder } from "../models/folder.js";
import { task } from "../models/task.js";
import { load, loadId } from "../storage/load.js";
const containerFormTask = document.getElementById("section-form-task");
export const formTask = document.getElementById("form-task");
import { containerPage } from "./loadFolder.js";

export function addNewTask(data) {
    let elementask = new task(crypto.randomUUID(), data.title, data.description, data.date, data.priority, false);
    return elementask;
}

export function obtainDataTask(form) {
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
            priority
        };
    }
}


containerPage.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-tarea")) {
        visibleFormTask()
    }
})

export function visibleFormTask() {
    containerFormTask.classList.remove("hidden")
}


export function hiddenFormTask() {
    containerFormTask.classList.add("hidden")
}