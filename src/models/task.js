export class task{
    constructor(id, title, description, dueDate, priority, checklist, folder){
        this.id = id
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.complete = checklist,
        this.folder = folder
    }

    switchComplete(){
        console.log("llegamos")
        this.complete = !this.complete;
    }
}