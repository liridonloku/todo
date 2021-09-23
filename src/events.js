import { defaultDisplay, todayDisplay, weekDisplay } from "./display";
import { domElements, loadTasks } from "./dom";
import { getProjects } from "./projects";
import { addTask, editTask, getTasks } from "./tasks";
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
        console.log('edited');
        console.log(getTasks());
    }
    else{
        addTask(domElements.taskTitle.value,domElements.taskDescription.value,domElements.taskProject.value,domElements.taskDate.value,domElements.taskPriority.value);
        console.log(getTasks());
    }
}
//Cancel task form button
const cancelTaskForm = (id) =>{
    toggleTaskForm(id);
}
//Delete task button
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
            }
        }
        //New project
        else{
            domElements.projectName.value = '';
        }
        projectForm.style.display = 'flex';
    }
    else{
        projectForm.style.display = 'none';
    }
}
//Save/edit project form button
//Cancel project form button
const cancelProjectForm = (id) =>{
    toggleProjectForm(id);
}
//Delete project button
//All tasks
const displayAllTasks = () =>{
    domElements.domTasksTitle.textContent = 'All tasks:';
    loadTasks(defaultDisplay());
}
//Today
const displayToday = () =>{
    domElements.domTasksTitle.textContent = `Today's tasks:`;
    loadTasks(todayDisplay());
}
//This week
const displayThisWeek = () =>{
    domElements.domTasksTitle.textContent = `This week's tasks:`;
    loadTasks(weekDisplay());
}
//Project display

//Task details

export {toggleTaskForm, toggleProjectForm, cancelTaskForm, cancelProjectForm, displayAllTasks, displayToday, displayThisWeek, saveTask}