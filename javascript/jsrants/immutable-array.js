let tasks = [{title: 'task1'}];
let cloned = [...tasks];

tasks.push({title: 'task2'});
tasks[0].title = 'changed';
console.log(tasks);
console.log(cloned);