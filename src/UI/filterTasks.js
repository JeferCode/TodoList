import { format, isDate, isToday, parseISO } from "date-fns";
import { folder } from "../models/folder.js";
import { load, converElement } from "../storage/load.js";

function loadDataConvert() {
    let folders = load();
    let converFolders = converElement(folders)
    let data = converFolders.flatMap(element => {
        let tasks = element.getAllTask();
        return tasks;
    });
    console.log(data)
    return data;
}



 export function createDate() {
    let data = loadDataConvert();
    let result = [];
    let dates = data.map(element => {
        let date = parseISO(element.dueDate);
        let elementDate = new Date(date);
        console.log(elementDate)
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
    console.log(elements)
    return elements;
}