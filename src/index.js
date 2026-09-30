import { folder } from "./models/folder.js"
import { task } from "./models/task.js"
import { add, folders, save } from "./storage/save.js"
import { addFolder, container, obtainName, hiddenForm, visibleForm, form, listContent } from "./UI/addFolder.js"
import "./styles.css";
import { load, loadId, converElement } from "./storage/load.js";
import { renderPage } from "./UI/content.js";
import { containerPage, renderFolders } from "./UI/loadFolder.js";
import { obtainDataTask, formTask, addNewTask } from "./UI/addTask.js";

let añadir = document.getElementById("añadir");

añadir.addEventListener("click", () => {
    visibleForm()
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = obtainName(form)
    let addData = addFolder(name);
    add(addData)
    form.reset();
    renderFolders()
})


listContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("folder")) {
        containerPage.dataset.page = e.target.dataset.id;
        containerPage.innerHTML = "";
        let Id = e.target.dataset.id;
        let folders = load()
        let data = loadId(folders, Id);
        renderPage(data)
    }
})


formTask.addEventListener("submit", (e)=>{
    e.preventDefault();
    let nFolders = load();
    let newFolders = converElement(nFolders);
    let id = containerPage.dataset.page;
    let data = obtainDataTask(formTask);
    let newTask = addNewTask(data);
    let element = loadId(newFolders, id);
    element.addTask(newTask)
    save(newFolders);
    formTask.reset();
})
renderFolders()