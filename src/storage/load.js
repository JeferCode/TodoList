///cargar las carpetas y tareas que estan en el localstorage

export function load() {
    let folder = JSON.parse(localStorage.getItem("folders")) || [];
    //console.log(folder);
    return folder;
}

export function loadId(elements, id) {
    return elements.find((e => e.id === id))
}