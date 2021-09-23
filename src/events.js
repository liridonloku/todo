import { defaultDisplay, todayDisplay, weekDisplay, projectDisplay } from "./display";
import { domElements, loadProjects, loadTasks } from "./dom";
import { addProject, editProject, getProjects, removeProject } from "./projects";
import { addTask, editTask, getTasks, removeTask } from "./tasks";
//Menu toggle (mobile)
//Task form toggle (via new task or edit task)
const toggleTaskForm = (id) => {
    const taskForm = document.querySelector('.task-form');
    if(taskForm.style.display === 'none' || taskForm.style.display === ''){
        //Edit task
        if(id != ''){
            let tasks = getTasks();
            let index = tasks.findIndex(e => e.id === id);
            if(index >= 0){
                domElements.taskTitle.value = tasks[index].title;
                domElements.taskDescription.value = tasks[index].description;
                domElements.taskPriority.value = tasks[index].priority;
                domElements.taskDate.value = tasks[index].date;
                domElements.taskProject.value = tasks[index].project;
                domElements.saveTask.setAttribute('id', tasks[index].id);
            }
        }
        //New task
        else{
            domElements.taskTitle.value = '';
            domElements.taskDescription.value = '';
            domElements.taskPriority.value = 'medium';
            domElements.taskDate.value = new Date().toISOString().slice(0,10);
            domElements.taskProject.value = '';
            domElements.saveTask.setAttribute('id', '');
        }
        taskForm.style.display = 'flex';
    }
    else{
        taskForm.style.display = 'none';
    }
}
//Save/edit task form button
const saveTask = () =>{
    const id = domElements.saveTask.getAttribute('id');
    //If task exist - edit it.
    if(id != ''){
        editTask(id,domElements.taskTitle.value,domElements.taskDescription.value,domElements.taskProject.value,domElements.taskDate.value,domElements.taskPriority.value);
    }
    else{
        addTask(domElements.taskTitle.value,domElements.taskDescription.value,domElements.taskProject.value,domElements.taskDate.value,domElements.taskPriority.value);
    }
    toggleTaskForm('');
    loadLastView();
}
//Cancel task form button
const cancelTaskForm = (id) =>{
    toggleTaskForm(id);
}
//Delete task button
const deleteTask = (id) =>{
    removeTask(id);
    loadLastView();
}
//Project form toggle (via new project or edit project)
const toggleProjectForm = (id) =>{
    const projectForm = document.querySelector('.project-form');
    if(projectForm.style.display === 'none' || projectForm.style.display === ''){
        //Edit project
        if(id != ''){
            let projects = getProjects();
            let index = projects.findIndex(e => e.id === id);
            if(index >= 0){
                domElements.projectName.value = projects[index].name;
                domElements.saveProject.setAttribute('id', projects[index].id);
            }
        }
        //New project
        else{
            domElements.projectName.value = '';
            domElements.saveProject.setAttribute('id', '');
        }
        projectForm.style.display = 'flex';
    }
    else{
        projectForm.style.display = 'none';
    }
}
//Save/edit project form button
const saveProject = () =>{
    const id = domElements.saveProject.getAttribute('id');
    if(id != ''){
        editProject(id, domElements.projectName.value);
    }
    else{
        addProject(domElements.projectName.value);
    }
    toggleProjectForm('');
    loadProjects(getProjects());
}
//Cancel project form button
const cancelProjectForm = (id) =>{
    toggleProjectForm(id);
}
//Delete project button
const deleteProject = (id) =>{
    let confirmation = confirm(`Are you sure you want to delete this project. This will delete its tasks too.`);
    if(confirmation){
        removeProject(id);
        loadProjects(getProjects());
        loadLastView();
    }
}

let lastView = 'All tasks';
//All tasks
const displayAllTasks = () =>{
    lastView = 'All tasks';
    domElements.domTasksTitle.textContent = 'All tasks:';
    loadTasks(defaultDisplay());
}
//Today
const displayToday = () =>{
    lastView = 'Today';
    domElements.domTasksTitle.textContent = `Today's tasks:`;
    loadTasks(todayDisplay());
}
//This week
const displayThisWeek = () =>{
    lastView = 'This week';
    domElements.domTasksTitle.textContent = `This week's tasks:`;
    loadTasks(weekDisplay());
}
//Project display
const projectDisplayFunction = (id) =>{
    let projects = getProjects();
    let index = projects.findIndex(e => e.id === id);
    let projectName = projects[index].name;
    domElements.domTasksTitle.textContent = `Project: ${projectName}`;
    loadTasks(projectDisplay(projectName));
}
//Task details

const loadLastView = () =>{
    switch(lastView){
        case 'All tasks':
            displayAllTasks();
            break;
        case 'Today':
            displayToday();
            break;
        case 'This week':
            displayThisWeek();
            break;
        default:
            break;
    }
}

export {toggleTaskForm, toggleProjectForm, cancelTaskForm, cancelProjectForm, displayAllTasks, displayToday, displayThisWeek, saveTask, deleteTask, saveProject, deleteProject, projectDisplayFunction}