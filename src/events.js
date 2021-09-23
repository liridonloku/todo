import { domElements } from "./dom";
import { getProjects } from "./projects";
import { getTasks } from "./tasks";
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
            }
        }
        //New task
        else{
            domElements.taskTitle.value = '';
            domElements.taskDescription.value = '';
            domElements.taskPriority.value = 'medium';
            domElements.taskDate.value = new Date().toISOString().slice(0,10);
            domElements.taskProject.value = '';
        }
        taskForm.style.display = 'flex';
    }
    else{
        taskForm.style.display = 'none';
    }
}
//Save/edit task form button
//Cancel task form button
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
//Delete form button
//All tasks
//Today
//This week
//Project display
//Task details

export {toggleTaskForm, toggleProjectForm}