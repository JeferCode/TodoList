import { format, isDate, isToday, parseISO } from "date-fns";
import { folder } from "../models/folder.js";
import { load, converElement } from "../storage/load.js";
import { showTaskToday } from "./content.js";
import { save } from "../storage/save.js";

//talvez agregarle un filtro para tareas cuyas fechas ya venccieron, en este apartado no importa si una tarea esta completa o no(o quisas mejor si),
//solo importa si la fecha de la tarea ya paso o no.

function loadDataConvert() {
    let folders = load();
    let converFolders = converElement(folders)
    let data = converFolders.flatMap(element => {
        let tasks = element.getAllTask();
        return tasks;
    });
    return data;
}

 export function createDate() {
    let data = loadDataConvert();
    let result = [];
    let dates = data.map(element => {
        let date = parseISO(element.dueDate);
        let elementDate = new Date(date);
        result.push(isToday(elementDate))
        return elementDate;
    })
    return filterToday(data, dates, result)
}

function filterToday(tasksData, dates, result) {
    let elements = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i] === true) {
            elements.push(tasksData[i])
        }
    }
    return elements;
}

export function filterComplete() {
    let data = loadDataConvert();
    let result = data.filter(e => e.complete === true);
    return result;
}

export function filterAll() {
    let data = loadDataConvert();
    return data;
}