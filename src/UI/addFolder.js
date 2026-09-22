const listContent = document.getElementById("list-content");
export const container = document.getElementById("container");

export function addFolder() {
    const datosFolder = document.createElement("div")
    datosFolder.classList.add("element");
    datosFolder.innerHTML = `<dialog open class="dialog-añadir"><form class="form"><input name="name" placeholder="list name"/> <button method="dialog">añadir</button></form></dialog>`
    const elementForm = document.querySelector(".dialog-añadir form")
    elementForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const data = new FormData(elementForm);
        listContent.append(data.get("name"));
    })
} 