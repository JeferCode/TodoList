export const containerPage = document.getElementById("container-page");

export function pageTitle(folder) {
    const title = document.createElement("h2");
    title.textContent = folder.nombre;
    console.log(title)
    containerPage.append(title);
}


