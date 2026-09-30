///cargar las carpetas y tareas que estan en el localstorage
import { addFolder } from "../UI/addFolder.js";
import { folder } from "../models/folder.js";

export function load() {
    let folderStorage = JSON.parse(localStorage.getItem("folders")) || [];
    return folderStorage;
}

export function loadId(elements, id) {
    return elements.find((e => e.id === id))
}

export function converElement(array){
    return array.map((element)=>{
        let objet = new folder(element.name, element.id)
        objet.tasks = element.tasks;
        return objet;
    })
}