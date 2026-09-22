import { folder } from "./models/folder.js"
import { task } from "./models/task.js"
import { save } from "./storage/save.js"
import {addFolder, container} from "./UI/addFolder.js"
import "./styles.css";


let añadir = document.getElementById("añadir");

añadir.addEventListener("click", () => {
    
    /*let prueva = new folder("prueva");


    prueva.addTask(new task(1, "sacnajs", "achjnbacnanjcnanjncja", 511151, "baja", true));
    prueva.addTask(new task(2, "hola", "cascasccascas", 111111, "urgente", true))
    prueva.getTask(1).isComplete();
    console.log(prueva)
    //hogar.removeTask(2)

    save(prueva, "prueva")*/
    addFolder();
    console.log("se inicio la funcion addFolder")
})


