import { getTasks, changeProject, removeTask, setTasks } from "./tasks";

const projects = []; //project container

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
    }
}

//project getter
const getProjects = () => {
    return projects;
}

export {addProject, editProject, removeProject, getProjects};