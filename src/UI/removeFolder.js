import { converElement, load, loadId } from "../storage/load.js";
import { containerPage, renderFolders } from "./loadFolder.js";
import { save } from "../storage/save.js";
import { renderPage } from "./content.js";

export function dalateFolder(element, id) {
    let NewElements = element.filter((e) => e.id !== id);
    save(NewElements)
    renderFolders()
    containerPage.innerHTML = "";
}


containerPage.addEventListener("click", (e) => {
    if (e.target.id === "delate-folder") {
        let id = containerPage.dataset.page;
        let folders = load();
        dalateFolder(folders, id)
    }
})