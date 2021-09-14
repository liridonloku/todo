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
    const id = tasks.length;
    const newTask = createTask({title, project, date, priority, done, id});
    tasks.push(newTask);
}

//remove function
const removeTask = (id) => {
    if(id >= 0){
        tasks.splice(id,1);
    }
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