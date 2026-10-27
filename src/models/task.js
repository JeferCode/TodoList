export class task{
    constructor(id, title, description, dueDate, priority, checklist, folder, folderName){
        this.id = id
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.complete = checklist,
        this.folder = folder
        this.folderName = folderName
    }

    switchComplete(){
        this.complete = !this.complete;
    }
}