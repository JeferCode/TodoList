///cargar las carpetas y tareas que estan en el localstorage
import { addFolder } from "../UI/addFolder.js";

export function load() {
    let folderStorage = JSON.parse(localStorage.getItem("folders")) || [];
    return folderStorage;
}

export function ShowLoad(data){
    data.forEach(element => {
        addFolder(element.name)
    });
}

export function loadId(elements, id) {
    return elements.find((e => e.id === id))
}