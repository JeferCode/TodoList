import { renderTasks } from "./content.js";
import { createDate } from "./filterTasks.js";
const containerFilter = document.getElementById("container-filter");
const btnToday = document.getElementById("today");


containerFilter.addEventListener("click", (e)=>{
    if (e.target.id === "today") {
        showTaskToday(createDate())
    }
})

function showTaskToday(date) {
    renderTasks(date)
}