import { createDate, filterComplete, filterAll } from "./filterTasks.js";
import { containerPage } from "./loadFolder.js";
import { showTask } from "./content.js";
export const btnFilterToday = document.getElementById("today");
export const btnFilterComplete = document.getElementById("complete");
export const btnFilterAll = document.getElementById("all");
export const containerFilter = document.getElementById("container-filter");


containerFilter.addEventListener("click", (e)=>{
    if (e.target.id === "today") {
        containerPage.dataset.page = "filterToday";
        let title = obtainTitle(btnFilterToday);
        showTask(createDate(), title);
    }else if(e.target.id === "complete"){
        containerPage.dataset.page = "filterComplete";
        let title = obtainTitle(btnFilterComplete);
        showTask(filterComplete(), title);
    }else if (e.target.id === "all") {
        containerPage.dataset.page = "filterAll";
        let title = obtainTitle(btnFilterAll);
        showTask(filterAll(), title)
    }
})

export function obtainTitle(element) {
    let name = element.textContent;
    return name
}
