import { load } from "./load.js";

export let folders = load();
export function add(array) {
    folders.push(array);
    save(folders)
}


export function save(data) {
    localStorage.setItem("folders", JSON.stringify(data));
}
