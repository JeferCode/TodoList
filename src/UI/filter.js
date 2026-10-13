import { renderTasks } from "./content.js";
import { createDate, filterComplete } from "./filterTasks.js";
import { containerPage } from "./loadFolder.js";
import { showTaskToday } from "./content.js";
export const containerFilter = document.getElementById("container-filter");


containerFilter.addEventListener("click", (e)=>{
    if (e.target.id === "today") {
        containerPage.dataset.page = "filterToday";
        showTaskToday(createDate());
    }else if(e.target.id === "complete"){
        containerPage.dataset.page = "filterComplete";
        showTaskToday(filterComplete());
    }
})

