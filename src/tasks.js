import { projectDisplay } from "./display";

let tasks = []; //task container, is let for a reason.

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
const addTask = (title, description, project, date, priority) => {
    if(tasks.length >= 1000000){
        alert('Task limit reached: 1 million tasks');
    }
    else{
        let id = '';
        let idExists = true;
        let done = 'No';
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

//edit function
const editTask = (id, title, description, project, date, priority) => {
    let index = tasks.findIndex(e => e.id === id);
    if(index >= 0){
        tasks[index].title = title;
        tasks[index].description = description;
        tasks[index].project = project;
        tasks[index].date = date;
        tasks[index].priority = priority;
    }
}

//change project for a task
const changeProject = (id, newProject) => {
    let index = tasks.findIndex(e => e.id === id);
    if(index >= 0){
        tasks[index].project = newProject;
    }
}

//remove function
const removeTask = (id) => {
    let index = tasks.findIndex(e => e.id === id);
    tasks.splice(index,1);
}

//set tasks, only used when deleting a project
const setTasks = (newTasks) => {
    tasks = newTasks;
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

export {addTask, editTask, changeProject, removeTask, markDone, getTasks, setTasks};