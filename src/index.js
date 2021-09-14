import {addTask, removeTask, markDone, getTasks} from './tasks.js';

addTask('title1','default', '15.09.2021', '3', 'No');
addTask('title2','default', '15.09.2021', '3', 'No');
console.log(getTasks());
removeTask(0);
markDone(0);
addTask('title3', 'default', '16.09.2021', '3', 'No');
console.log(getTasks());