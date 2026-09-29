import { folder } from "./models/folder.js"
import { task } from "./models/task.js"
import { add, folders } from "./storage/save.js"
import { addFolder, container, obtainName, hiddenForm, visibleForm, form, listContent } from "./UI/addFolder.js"
import "./styles.css";
import { load, loadId } from "./storage/load.js";
import { renderPage } from "./UI/content.js";
import { containerPage, renderFolders } from "./UI/loadFolder.js";
import { obtainDataTask, formTask, addNewTask } from "./UI/addTask.js";
const btncreate = document.getElementById("create-task");

let añadir = document.getElementById("añadir");

añadir.addEventListener("click", () => {

    /*let prueva = new folder("prueva");


    prueva.addTask(new task(1, "sacnajs", "achjnbacnanjcnanjncja", 511151, "baja", true));
    prueva.addTask(new task(2, "hola", "cascasccascas", 111111, "urgente", true))
    prueva.getTask(1).isComplete();
    console.log(prueva)
    //hogar.removeTask(2)

    save(prueva, "prueva")*/
    visibleForm()
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = obtainName(form)
    let addData = addFolder(name);
    add(addData)
    form.reset();
    load()
})


listContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("folder")) {
        containerPage.dataset.Page = e.target.dataset.id;
        containerPage.innerHTML = "";
        let Id = e.target.dataset.id;
        let folders = load()
        let data = loadId(folders, Id);
        renderPage(data)
    }
})

renderFolders()

btncreate.addEventListener("submit", (e)=>{
    e.preventDefault();
    let id = containerPage.dataset.Page;
    console.log(id)
    let data = obtainDataTask(formTask);
    console.log(data)
    let newTask = addNewTask(data);
    let element = loadId(folders, id);
    console.log(" ssada" + element)
})