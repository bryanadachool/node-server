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

readlineSync.promptCLLoop({
    add: function(target, into) {
      console.log(target + ' is added into ' + into + '.');
      // Do something...
    },
    remove: function(target) {
      console.log(target + ' is removed.');
      // Do something...
    },
    bye: function() { return true; }
  });
  console.log('Exited');
 
  readlineSync.setDefaultOptions({limit: ['green', 'yellow', 'red']});
a1 = readlineSync.question('Which color of signal? '); // Input is limited to 3 things.
a2 = readlineSync.question('Which color of signal? '); // It's limited yet.
a3 = readlineSync.question('What is your favorite color? ', {limit: null}); // It's unlimited temporarily.
a4 = readlineSync.question('Which color of signal? '); // It's limited again.
readlineSync.setDefaultOptions({limit: ['beef', 'chicken']});
a5 = readlineSync.question('Beef or Chicken? ');        // Input is limited to new 2 things.
a6 = readlineSync.question('And you? ');                // It's limited to 2 things yet.
