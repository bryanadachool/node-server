
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks=[]
function addTask(index,description) {
  const task={
    index: index,
    description:description,
    completed:false 
};
 tasks.push(task);
 console.log('the task was added successfully ');
showTasks();
}

function removeTask(index) {
 if (index < 0 || index >= tasks.length) {
    console.log('invalid option');
    return;
 }
  
 tasks.splice(index, 1);
 console.log('the task was successfully deleted');
 showTasks()
}

function completeTask(index) {
  if (index < 0 || index>=tasks.length) {
    console.log('Invalid option');
    return;
  }  
  tasks[index].completed=true;
  console.log('the task was completed successfully');
  showTasks();

}

function showTasks() {
 console.log('=== list task ===');
 setTimeout(()=>{
    tasks.forEach((task,index)=>{
        console.log(`${index +1}. [${task.index}] ${task.description} - ${task.completed ? 'completed':'earring'}`);
    
     })
 },1000)
 
 console.log('=================');
}

async function showMenu() {
    while (true) {

        console.log('\n[1] Agregar tarea');
        console.log('[2] Eliminar tarea');
        console.log('[3] Marcar tarea como completada');
        console.log('[4] Mostrar lista de tareas');
        console.log('[5] Salir');

        let Option= await new Promise((resolve)=>{
            rl.question('Option: ',resolve);
        })
        switch (Option) {
            case '1':
                const index= await new Promise((resolve)=>{
                    rl.question('index: ',resolve)
                })
                const description= await new Promise ((resolve)=>{
                    rl.question('description: ',resolve)
                })
                addTask(index,description)
                break;
            case '2':
                const indexRemove= await new Promise((resolve)=>{
                 rl.question('select the task you want to delete',resolve)
                })
                removeTask(indexRemove-1)
                break
               case '3':
                const indexComplete= await new Promise((resolve)=>{
                    rl.question('select the task you want to completed',resolve)
                })
                completeTask(indexComplete-1)
                break
                case '4':
                    showTasks()
                    break
                case '5':
                    rl.close();
                    return;
            default:
                console.log('Invalid Option');
                break;
        }
    }
 

 
}

console.log('===== Aplicación de Lista de Tareas =====');
showMenu();