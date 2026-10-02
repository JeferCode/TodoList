import { folder } from "./models/folder.js"
import { task } from "./models/task.js"
import { add, folders, save } from "./storage/save.js"
import { addFolder, container, obtainName, hiddenForm, visibleForm, form, listContent } from "./UI/addFolder.js"
import "./styles.css";
import { load, loadId, converElement } from "./storage/load.js";
import { renderPage, renderTasks } from "./UI/content.js";
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
        let idpage = containerPage.dataset.page;
        let folders = load()
        console.log(folders)
        console.log(folders instanceof folder)
        let converFolders = converElement(folders);
        console.log(converFolders)
        console.log(converFolders instanceof folder)
        let data = loadId(converFolders, Id);
        renderPage(data)
        renderTasks(data.getAllTask())
    }
})


formTask.addEventListener("submit", (e) => {
    e.preventDefault();
    let nFolders = load();
    let id = containerPage.dataset.page;
    let newFolders = converElement(nFolders);
    console.log(newFolders)
    let data = obtainDataTask(formTask);
    let newTask = addNewTask(data);
    let element = loadId(newFolders, id);
    element.addTask(newTask)
    save(newFolders);
    formTask.reset();

})
renderFolders()