const listContent = document.getElementById("list-content");
export const container = document.getElementById("container");
import { folder } from "../models/folder.js";
import { save } from "../storage/save.js";


export function addFolder(name) {
    if (name !== "") {
        let carpeta = new folder(name)
        let element = document.createElement("button");
        element.classList.add("folder");
        element.textContent = name;
        listContent.append(element);
        element.click()
        return carpeta;
    }
}

export function obtainName() {
    let dato = prompt("ingresa el nombre")
    return dato
}