export const containerPage = document.getElementById("container-page");
import { load } from "../storage/load.js";
import { listContent } from "./addFolder.js";


export function renderFolders() {
    listContent.innerHTML = "";
    let folders =load();
    console.log("FOLDERS DEL STORAGE:", folders);
    folders.forEach(element => {
        console.log("Creando botón con ID:", element.id);
        createElemenst(element.name, element.id)
    });
}

function createElemenst(title, id) {
    let element = document.createElement("button");
    element.dataset.id = id;
    element.classList.add("folder");
    element.textContent = title;
    listContent.append(element);
}

