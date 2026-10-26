///cargar las carpetas y tareas que estan en el localstorage
import { addFolder, defaulFolder } from "../UI/addFolder.js";
import { folder } from "../models/folder.js";
import { save } from "./save.js";

export function load() {
    let folderStorage = JSON.parse(localStorage.getItem("folders")) || [defaulFolder()];
    if (!localStorage.getItem("folders")) {
        save(folderStorage)
    }
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

export function converElementforDelate(array){
    return array.flatMap((element)=>{
        let objet = new folder(element.name, element.id)
        objet.tasks = element.tasks;
        return objet;
    })
}