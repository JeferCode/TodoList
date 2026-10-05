import { id } from "date-fns/locale";
import { converElement, load, loadId } from "../storage/load.js";
import { containerPage, renderFolders } from "./loadFolder.js";
import { save } from "../storage/save.js";
import { renderPage } from "./content.js";

export function dalateFolder(element, id) {
    console.log(element);
    console.log(id);
    let NewElements = element.filter((e) => e.id !== id);
    save(NewElements)
    renderFolders()
    containerPage.innerHTML = "";
}


containerPage.addEventListener("click", (e) => {
    if (e.target.id === "delate-folder") {
        let id = containerPage.dataset.page;
        console.log("esta es la id: " + id)
        let folders = load();
        console.log("esta es la folders: " + folders);
        dalateFolder(folders, id)
    }
})