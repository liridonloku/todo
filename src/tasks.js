const tasks = []; //task container

//task factory function
const createTask = ({title, description, project, date, priority,done, id}) =>({
    title,
    description,
    project,
    date,
    priority,
    done,
    id
});

//add function
const addTask = (title, description, project, date, priority, done) => {
    if(tasks.length >= 1000000){
        alert('Task limit reached: 1 million tasks');
    }
    else{
        let id = '';
        let idExists = true;
        while(idExists){
            id = Math.floor(Math.random()*1000000).toString();
            idExists = false;
            tasks.forEach(task => {
                if(task.id === id){
                    idExists = true;
                }
            });
        }
        const newTask = createTask({title, description, project, date, priority, done, id});
        tasks.push(newTask);
    }
}

//remove function
const removeTask = (id) => {
    let index = tasks.findIndex(e => e.id === id);
    tasks.splice(index,1);
}

//mark as done function
const markDone = (id) => {
    let index = tasks.findIndex(e => e.id === id);
    if(index >= 0){
        if(tasks[index].done === 'No'){
            tasks[index].done = 'Yes';
        }
        else{
            tasks[index].done = 'No';
        }
    }
}

//task getter
const getTasks = () => {
    return tasks;
}

export {addTask, removeTask, markDone, getTasks};