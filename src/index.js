import { folder } from "./models/folder.js"
import { task } from "./models/task.js"
import { add, save } from "./storage/save.js"
import { addFolder, container, obtainName, hiddenForm, visibleForm, form, listContent } from "./UI/addFolder.js"
import "./styles.css";
import { load, loadId, converElement } from "./storage/load.js";
import { renderfordelate, renderPage } from "./UI/content.js";
import { containerPage, renderFolders } from "./UI/loadFolder.js";
import { obtainDataTask, formTask, addNewTask, hiddenFormTask } from "./UI/addTask.js";
import { delateTasks } from "./UI/removeTask.js";
import "./UI/removeFolder.js";
import "./UI/taskStatus.js";
import "./UI/filterTasks.js";
import "./UI/filter.js"
import { obtainData, obtainTask } from "./UI/taskStatus.js";

const btnAdd = document.getElementById("añadir");
const btnCancel = document.getElementById("cancel-task");
const btnCancelFolder = document.getElementById("cancel-folder");

btnAdd.addEventListener("click", () => {
    form.dataset.folder = "";
    visibleForm()
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let dataFolder = obtainData();
    let id = containerPage.dataset.page;
    let folder = loadId(dataFolder, id);
    if (form.dataset.folder === "") {
        let name = obtainName(form)
        if (name !== undefined) {
            let addData = addFolder(name);
            add(addData)
            form.reset();
            renderFolders()
        }
    }else{
        let dataForm = obtainName(form);
        if (dataForm !== undefined) {
            folder.name = dataForm;
            save(dataFolder);
            form.reset();
            renderFolders();
            renderfordelate(folder)
        }
    }
})



listContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("folder")) {
        containerPage.dataset.page = e.target.dataset.id;
        containerPage.dataset.name = e.target.textContent;
        containerPage.dataset.id = e.target.dataset.id;
        formTask.dataset.id = e.target.dataset.id;
        containerPage.innerHTML = "";
        let Id = e.target.dataset.id;
        let idpage = containerPage.dataset.page;
        let folders = load()
        let converFolders = converElement(folders);
        let data = loadId(converFolders, Id);
        renderfordelate(data)
    }
})


formTask.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formTask.dataset.folder === "") {
        let Folders = obtainData();
        let id = containerPage.dataset.page;
        let data = obtainDataTask(formTask);
        if (data !== undefined) {
            let newTask = addNewTask(data);
            let element = loadId(Folders, id);
            element.addTask(newTask)
            save(Folders);
            formTask.reset();
            renderfordelate(element)
        }
    } else {
        let Folders = obtainData();
        let folderId = formTask.dataset.folder;
        let id = formTask.dataset.id;
        let data = obtainDataTask(formTask);
        if (data !== undefined) {
            let element = loadId(Folders, folderId);
            let idtask = formTask.dataset.task;
            let task = obtainTask(idtask, Folders)
            task.title = data.title;
            task.description = data.description;
            task.dueDate = data.date;
            task.priority = data.priority;
            save(Folders);
            formTask.reset();
            renderfordelate(element)
        }
    }

})


btnCancel.addEventListener("click", () => {
    formTask.reset();
    hiddenFormTask();
})

btnCancelFolder.addEventListener("click", () => {
    form.reset();
    hiddenForm();
})


renderFolders()