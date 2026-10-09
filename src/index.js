import { folder } from "./models/folder.js"
import { task } from "./models/task.js"
import { add, save } from "./storage/save.js"
import { addFolder, container, obtainName, hiddenForm, visibleForm, form, listContent } from "./UI/addFolder.js"
import "./styles.css";
import { load, loadId, converElement } from "./storage/load.js";
import { renderfordelate, renderPage, renderTasks } from "./UI/content.js";
import { containerPage, renderFolders } from "./UI/loadFolder.js";
import { obtainDataTask, formTask, addNewTask, hiddenFormTask } from "./UI/addTask.js";
import { delateTasks } from "./UI/removeTask.js";
import "./UI/removeFolder.js";
import "./UI/taskStatus.js"

const btnAdd = document.getElementById("añadir");
const btnCancel = document.getElementById("cancel-task");
const btnCancelFolder = document.getElementById("cancel-folder");

btnAdd.addEventListener("click", () => {
    visibleForm()
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = obtainName(form)
    if(name !== undefined){
        let addData = addFolder(name);
        add(addData)
        form.reset();
        renderFolders()
    }
})


listContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("folder")) {
        containerPage.dataset.page = e.target.dataset.id;
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
    let nFolders = load();
    let id = containerPage.dataset.page;
    let newFolders = converElement(nFolders);
    let data = obtainDataTask(formTask);
    if(data !== undefined){
        let newTask = addNewTask(data);
        let element = loadId(newFolders, id);
        element.addTask(newTask)
        save(newFolders);
        formTask.reset();
        renderfordelate(element)
    }

})

btnCancel.addEventListener("click", ()=>{
    formTask.reset();
    hiddenFormTask();
})

btnCancelFolder.addEventListener("click", ()=>{
    form.reset();
    hiddenForm();
})





renderFolders()