import { folder } from "./models/folder.js"
import { task } from "./models/task.js"
import { add, folders } from "./storage/save.js"
import { addFolder, container, obtainName, hiddenForm, visibleForm, form, listContent} from "./UI/addFolder.js"
import "./styles.css";
import { load, loadId } from "./storage/load.js";
import { pageTitle } from "./UI/loadFolder.js";
import { containerPage } from "./UI/loadFolder.js";

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

console.log(loadId(folders, "0e7c4def-bb61-4e68-ab9a-9f5b9d9857fd"))

listContent.addEventListener("click", (e)=>{
    if (e.target.classList.contains("folder")) {
        containerPage.innerHTML = "";
        let id = e.target.dataset.id;
        pageTitle(loadId(folders, id))
    }
})
