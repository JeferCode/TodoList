import { loadId } from "../storage/load.js";
import { formTask } from "./addTask.js";
import { containerPage } from "./loadFolder.js";
import { obtainData, obtainTask } from "./taskStatus.js";
import { form, visibleForm } from "./addFolder.js";

export function fillTaskForm(element) {
    let id = element.dataset.idtask;
    let data = obtainData();
    let task = obtainTask(id, data);
    formTask.dataset.task = id;
    formTask.dataset.folder = task.folder;
    formTask.dataset.id = task.id;
    formTask.title.value = task.title;
    formTask.description.value = task.description;
    formTask.dueDate.value = task.dueDate;
    formTask.priority.value = task.priority;
}

export function fillFolderForm() {
    let id = containerPage.dataset.page;
    let data = obtainData();
    let folder = loadId(data, id);
    form.name.value = folder.name
}

containerPage.addEventListener("click", (e)=>{
    console.log(e.target.id)
    if (e.target.id === "edite-folder") {
        let id = containerPage.dataset.page;
        form.dataset.folder = id;
        fillFolderForm();
        visibleForm();
    }
})

