import {folder} from "./models/folder.js"
import {task} from "./models/task.js"
import {save} from "./storage/save.js"


let hogar = new folder("hogar");


hogar.addTask(new task(1, "sacnajs", "achjnbacnanjcnanjncja", 511151, "baja", true));
hogar.addTask(new task(2, "hola", "cascasccascas", 111111, "urgente", true))
hogar.getTask(1).isComplete();
console.log(hogar)
//hogar.removeTask(2)

save(hogar, "muestra")