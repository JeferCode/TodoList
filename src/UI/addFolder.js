export const listContent = document.getElementById("list-content");
export const container = document.getElementById("container");
import { folder } from "../models/folder.js";
import { save } from "../storage/save.js";
let formFolder = document.getElementById("section-form-folder");
let createFolder = document.getElementById("create-folder");
export let form = document.getElementById("form-folder")


export function addFolder(name) {
    if (name !== "" && name !== null) {
        let id = crypto.randomUUID();
        let carpeta = new folder(name, id)
        return carpeta;
    }
}

export function obtainName(formulario) {
    let data = new FormData(formulario);
    let name = data.get("name")
    hiddenForm()
    return name;
}

export function visibleForm() {
    formFolder.classList.remove("hidden")
}


export function hiddenForm() {
    formFolder.classList.add("hidden")
}