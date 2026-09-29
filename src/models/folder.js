import { folders } from "../storage/save.js";

export class folder{
    constructor(name, id){
        this.id = id
        this.name = name
        this.tasks = [];
    }

    getTask(id){
        return this.tasks.find((e)=> e.id === id)
    }

    addTask(id, task){
        folders.find(e => e.id === id).tasks.push(task);
    }

    removeTask(id){
        this.tasks = this.tasks.filter((e)=> e.id !== id)
    }
}