import { format, isToday, parseISO } from "date-fns";
import { folder } from "../models/folder.js";
import { load, converElement } from "../storage/load.js";

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
        let date = format(new Date(parseISO(element.dueDate)), "dd/MM/yyyy");
        result.push(isToday(date))
        return date;
    })
    return filterToday(data, dates, result)
}

function filterToday(tasksData, dates, result) {
    let elements = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i] === true) {
            elements = tasksData.filter(element => format(parseISO(element.dueDate), "dd/MM/yyyy") === dates[i]);
            return elements;
        }
    }
    return elements;
}