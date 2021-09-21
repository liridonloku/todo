

//Append projects to the dom
const loadProjects = (projects) =>{
    //Clear previous content first
    //Create dom element for each project
    //Attach event listeners
    const container = document.querySelector('project-container');
    container.replaceChildren();

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
const loadTasks = () =>{
    //Clear previous content first
    //Create dom element for each task
    //Attach event listeners
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