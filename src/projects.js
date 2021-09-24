import { getTasks, changeProject, removeTask, setTasks } from "./tasks";

let projects = [
    {
        name: 'Getting started',
        id: '0000001'
    }
]; //project container

if(localStorage.projects){
    projects = JSON.parse(localStorage.projects);
}

//project factory function (name, id)
const createProject =({name, id}) => ({
    name,
    id
});

//add function
const addProject = (name) => {
    if(projects.length >= 1000000){
        alert('Project limit reached: 1 million projects');
    }
    else{
        let id = '';
        let idExists = true;
        while(idExists){
            id = Math.floor(Math.random()*1000000).toString();
            idExists = false;
            projects.forEach(project => {
                if(project.id === id){
                    idExists = true;
                }
            });
        }
        const newProject = createProject({name, id});
        projects.push(newProject);
        localStorage.projects = JSON.stringify(projects);
    }
}

//edit function
const editProject = (id, newName) => {
    let index = projects.findIndex(e => e.id === id);
    if(index >= 0){
        let tasks = getTasks();
        tasks.forEach(task => {
            if(task.project === projects[index].name){
                changeProject(task.id, newName);
            }
        });
        projects[index].name = newName;
        localStorage.projects = JSON.stringify(projects);
    }
}

//remove function
const removeProject = (id) => {
    let index = projects.findIndex(e => e.id === id);
    if(index >= 0){
        let tasks = getTasks();
        let newTasks = [];
        tasks.forEach(task => {
            if(task.project != projects[index].name){
                newTasks.push(task);
            }
        });
        setTasks(newTasks);
        projects.splice(index,1);
        localStorage.projects = JSON.stringify(projects);
    }
}

//project getter
const getProjects = () => {
    return projects;
}

export {addProject, editProject, removeProject, getProjects};