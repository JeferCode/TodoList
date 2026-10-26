export const listContent = document.getElementById("list-content");
export const container = document.getElementById("container");
import { folder } from "../models/folder.js";
import { save } from "../storage/save.js";
let formFolder = document.getElementById("section-form-folder");
let createFolder = document.getElementById("create-folder");
export let form = document.getElementById("form-folder")
import { modal } from "./addTask.js";
import { htmlData } from "./content.js";


export function addFolder(name) {
    let id = crypto.randomUUID();
    let element = new folder(name, id)
    return element;
}

export function obtainName(formulario) {
    let data = new FormData(formulario);
    let name = data.get("name").trim()
    if (name !== "") {
        hiddenForm()
        return name;
    }
}

export function visibleForm() {
    modal.classList.remove("hidden")
    formFolder.classList.remove("hidden")
}


export function hiddenForm() {
    modal.classList.add("hidden")
    formFolder.classList.add("hidden")
}

export function defaulFolder() {
    let id = "1";
    let name = "Imbox";
    let element = new folder(name, id)
    return element;
}

// lo mejor es quitar la opcion de eliminar crpeta y editar crpeta de la carpeta default/inbox, esto evitara que la carpeta quede vacia, ademas
//no veo necesario que el usuario pueda elminar esa carpeta(en su lugar podria ponerla junto a las carpetas de filtro? tal vez).