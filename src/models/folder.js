export class folder{
    constructor(nombre){
        this.nombre = nombre
        this.tasks = [];
    }

    getTask(id){
        return this.tasks.find((e)=> e.id === id)
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(id){
        this.tasks = this.tasks.filter((e)=> e.id !== id)
    }
}