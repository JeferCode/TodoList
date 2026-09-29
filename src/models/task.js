export class task{
    constructor(title, description, dueDate, priority, checklist){
        this.id = crypto.randomUUID(),
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