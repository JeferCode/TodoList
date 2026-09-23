export class task{
    constructor(id, title, description, dueDate, priority, checklist){
        this.id = id,
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.complete = checklist
    }

    switchComplete(){
        this.complete = !this.complete;
    }
}