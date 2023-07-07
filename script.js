
const readlineSync = require('readline-sync');

console.log('welcome');
console.log('add new task'); 


const userName = readlineSync.question('what is the to do list?: ');
const description = readlineSync.question('Task description:');
if (readlineSync.keyInYN('did you complete the task?')) {
  // 'Y' key was pressed.
  console.log('new task created');
  console.log('[x]',userName);
  console.log('description:', description);
  // Do something...
} else {
  // Another key was pressed.
  console.log ('task not completed')
  console.log('[]','task: ',userName)
  console.log('description:', description);
};
function add (userName,description) {
  userName =readlineSync.question('new task: ')
  description=readlineSync.question('new description: ');

  // Handle the secret text (e.g. password).
  if (readlineSync.keyInYN('did you complete the task?')) {
    // 'Y' key was pressed.
    console.log('new task created');
    console.log('[x]',userName);
    console.log('description:', description);
    // Do something...
  } else {
    // Another key was pressed.
    console.log ('task not completed')
    console.log('[]',userName)
    console.log('description:', description);
  
    // Do something...
  }

}
function Delete(name,description) {
 name=[];
 description=[];
console.log('has been removed');
}
function Update(name,description) {
  
  name = readlineSync.question('New task please:');
  description=readlineSync.question('New description:');
console.log('data has been update');
console.log(name);
console.log(description);

}
  ListTask = ['Add','Update','Delete',],
 index = readlineSync.keyInSelect(ListTask, 'select one of the options',); 

if (ListTask[index]=='Add') {
  
  console.log(add(userName,description))
  console.log('[]',userName);
  console.log('[]',description);
}else if (ListTask[index]=='Update') {
  console.log(userName);
  console.log(drescription);
  Update(userName,description);

}else if (ListTask[index]=='Delete'){
  Delete(userName,description);
} else if (ListTask[index]=='CANCEL') {
  return true;
}
 
