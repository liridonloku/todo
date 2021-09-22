const newTask = document.getElementById('new-task');
const newProject = document.getElementById('new-project');
const menu = document.getElementById('menu');

//Append projects to the dom
const loadProjects = (projects) =>{
    
    //Clear previous content first
    const container = document.querySelector('.project-container');
    container.replaceChildren();

    //Create dom element for each project
    //(Not done yet) Attach event listeners
    //Append created elements to the container    
    projects.forEach(project => {
        const singleProject = document.createElement('div');
        singleProject.classList.add('single-project');
        const projectName = document.createElement('div');
        projectName.classList.add('project-name');
        projectName.setAttribute('id', project.id);
        projectName.textContent = project.name;
        const editProject = document.createElement('div');
        editProject.classList.add('edit-project');
        editProject.setAttribute('id', project.id);
        editProject.textContent = 'E'; //To be replaced with an edit icon
        const deleteProject = document.createElement('div');
        deleteProject.classList.add('delete-project');
        deleteProject.setAttribute('id', project.id);
        deleteProject.textContent = 'D'; //To be replaced with a delete icon
        singleProject.appendChild(projectName);
        singleProject.appendChild(editProject);
        singleProject.appendChild(deleteProject);
        container.appendChild(singleProject);
    })
}

//Append tasks to the dom
const loadTasks = (tasks) =>{
    //Clear previous content first
    const container = document.querySelector('.task-container');
    container.replaceChildren();
    //Create dom element for each task
    //Attach event listeners
    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        const priority = document.createElement('div');
        priority.classList.add(`priority-${task.priority}`);
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task-title');
        taskTitle.setAttribute('id', task.id);
        taskTitle.textContent = task.title;
        const editTask = document.createElement('div');
        editTask.classList.add('edit-task');
        editTask.setAttribute('id', task.id);
        editTask.textContent = 'E'; //To be replaced with an edit icon
        const deleteTask = document.createElement('div');
        deleteTask.classList.add('delete-task');
        deleteTask.setAttribute('id', task.id);
        deleteTask.textContent = 'D'; //To be replaced with a delete icon
        taskCard.appendChild(priority);
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(editTask);
        taskCard.appendChild(deleteTask);
        container.appendChild(taskCard);
    });
}

//Create edit task form
const editTaskForm = (id) =>{
    //Pre-fill the form with data from task.id, then allow edits.
    //Attach event listeners
}

//Create edit project form
const editProjectForm = (id) =>{
    //Pre-fill the form with data from project.id, then allow edits.
    //Attach event listeners
}

export {loadProjects, loadTasks, editTaskForm, editProjectForm}