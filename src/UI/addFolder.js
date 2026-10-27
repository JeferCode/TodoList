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
    let name = "Inbox";
    let element = new folder(name, id)
    return element;
}
