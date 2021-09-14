const tasks = []; //task container

//task factory function
const createTask = ({title, project, date, priority,done, id}) =>({
    title,
    project,
    date,
    priority,
    done,
    id
});

//add function
const addTask = (title, project, date, priority, done) => {
    let id = '';
    do{
        id = Math.floor(Math.random()*1000000).toString();
    }while(tasks.forEach(task => {
            let idExists = false;
            if(task.id === id){
                idExists = true;
            }
            return idExists;
        }));
    const newTask = createTask({title, project, date, priority, done, id});
    tasks.push(newTask);
}

//remove function
const removeTask = (id) => {
    let index = tasks.findIndex(e => e.id === id);
    tasks.splice(index,1);
    console.log('removed');
}

//mark as done function
const markDone = (id) => {
    if(id >= 0){
        if(tasks[id].done === 'No'){
            tasks[id].done = 'Yes';
        }
        else{
            tasks[id].done = 'No';
        }
    }
}

//task getter
const getTasks = () => {
    return tasks;
}

export {addTask, removeTask, markDone, getTasks};