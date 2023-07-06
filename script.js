const readlineSync = require('readline-sync');

console.log('welcome');
console.log('select an option')



function add () {
  const userName = readlineSync.question('what is the to do list?: ');

  // Handle the secret text (e.g. password).
  const description = readlineSync.question('Task description:');
  if (readlineSync.keyInYN('did you complete the task?')) {
    // 'Y' key was pressed.
    console.log('new task created');
    console.log('[x]',userName);
    console.log('description:', description);
    // Do something...
  } else {
    // Another key was pressed.
    console.log ('tarea no completada')
    console.log('[]',userName)
    console.log('description:', description);
  
    // Do something...
  }

}
let ListTask = ['Add','Update','Delete',],
 index = readlineSync.keyInSelect(ListTask, 'select one of the options',
);
if (ListTask[index]=='Add') {
  console.log(add())
}else if (ListTask[index]=='Update') {
  
}else if (ListTask[index]=='Delete'){

} else if (ListTask[index]=='CANCEL') {
  return true;
}


 
