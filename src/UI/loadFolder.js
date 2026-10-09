export const containerPage = document.getElementById("container-page");
import { load, converElement } from "../storage/load.js";
import { listContent } from "./addFolder.js";


export function renderFolders() {
    let folders = converElement(load());
    if (folders !== null) {
        listContent.innerHTML = "";
        folders.forEach(element => {
            createElemenst(element.name, element.id)
        });
    }
}

function createElemenst(title, id) {
    let element = document.createElement("button");
    element.dataset.id = id;
    element.classList.add("folder");
    element.textContent = title;
    listContent.append(element);
}

