import { load } from "./load.js";

export function add(array) {
    let folders = load();
    folders.push(array);
    save(folders)
}


export function save(data) {
    localStorage.setItem("folders", JSON.stringify(data));
}

//localStorage.clear()