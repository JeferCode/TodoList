import { task } from "../models/task.js";
const containerFormTask = document.getElementById("section-form-task");
export const formTask = document.getElementById("form-task");
import { containerPage } from "./loadFolder.js";

function addTask() {
    
}

export function obtainDataTask(form) {
    let data = new FormData(form);
    let title = data.get("title")
    let description = data.get("description")
    let date = data.get("dueDate")
    let priority = data.get("priority")
    hiddenFormTask();
    return {
        title,
        description,
        date,
        priority
    };
}


containerPage.addEventListener("click", (e)=>{
    if(e.target.classList.contains("add-tarea")){
        let element = e.target.closest(".folder")
        let id = element.dataset.id;
        visibleFormTask()
        console.log(id)
        return id;
    }
})

export function visibleFormTask() {
    containerFormTask.classList.remove("hidden")
}


export function hiddenFormTask() {
    containerFormTask.classList.add("hidden")
}