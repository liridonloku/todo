import {
  toggleTaskForm,
  toggleProjectForm,
  cancelTaskForm,
  cancelProjectForm,
  displayAllTasks,
  displayToday,
  displayThisWeek,
  saveTask,
  deleteTask as deleteTaskFunction,
  saveProject,
  deleteProject as deleteProjectFunction,
  projectDisplayFunction,
  showTaskDetails,
  toggleMenu,
  toggleTheme,
} from "./events";
import { getProjects } from "./projects";

const domElements = {
  menu: document.getElementById("menu"),
  themeToggle: document.querySelector(".theme-toggle"),
  newTask: document.getElementById("new-task"),
  newProject: document.getElementById("new-project"),
  taskTitle: document.getElementById("task-form-title"),
  taskDescription: document.getElementById("task-form-description"),
  taskPriority: document.getElementById("task-form-priority"),
  taskDate: document.getElementById("task-form-date"),
  taskProject: document.getElementById("task-form-project"),
  saveTask: document.querySelector(".task-save-button"),
  cancelTask: document.querySelector(".task-cancel-button"),
  projectName: document.getElementById("project-form-name"),
  saveProject: document.querySelector(".project-save-button"),
  cancelProject: document.querySelector(".project-cancel-button"),
  allTasks: document.getElementById("all-tasks"),
  today: document.getElementById("today"),
  thisWeek: document.getElementById("this-week"),
  domTasksTitle: document.getElementById("tasks-dom-title"),
  taskDetails: document.querySelector(".task-details"),
  taskDetailsTitle: document.querySelector(".task-details-title"),
  taskDetailsDescription: document.querySelector(".task-details-description"),
  taskDetailsPriority: document.querySelector(".task-details-priority"),
  taskDetailsDate: document.querySelector(".task-details-date"),
  taskDetailsProject: document.querySelector(".task-details-project"),
  taskDetailsOkButton: document.querySelector(".task-details-ok-button"),
  formOverlay: document.querySelector(".task-form-overlay"),
  sidePanel: document.querySelector(".side-panel"),
};

domElements.menu.addEventListener("click", () => {
  toggleMenu();
});

domElements.themeToggle.addEventListener("click", () => {
  toggleTheme();
});

domElements.newTask.addEventListener("click", () => {
  const id = "";
  toggleTaskForm(id);
});

domElements.newProject.addEventListener("click", () => {
  const id = "";
  toggleProjectForm(id);
});

domElements.cancelTask.addEventListener("click", () => {
  const id = "";
  cancelTaskForm(id);
});

domElements.cancelProject.addEventListener("click", () => {
  const id = "";
  cancelProjectForm(id);
});

domElements.allTasks.addEventListener("click", () => {
  displayAllTasks();
});

domElements.today.addEventListener("click", () => {
  displayToday();
});

domElements.thisWeek.addEventListener("click", () => {
  displayThisWeek();
});

domElements.saveTask.addEventListener("click", () => {
  if (domElements.taskTitle.value.length < 1) {
    alert("Please give a title to your task.");
    return;
  }
  if (!domElements.taskDate.value) {
    alert("Please pick a due date.");
    return;
  }
  saveTask();
});

domElements.saveProject.addEventListener("click", () => {
  if (domElements.projectName.value.length < 1) {
    alert("Please give a name to your project.");
    return;
  }
  let projectExists = false;
  getProjects().forEach((project) => {
    if (project.name === domElements.projectName.value) {
      alert(
        "A project with this name already exists. Please use another name."
      );
      projectExists = true;
    }
  });
  if (projectExists) {
    return;
  }
  saveProject();
});

//Append projects to the dom
const loadProjects = (projects) => {
  //Clear previous content first
  const container = document.querySelector(".project-container");
  container.replaceChildren();

  //Clear project dropdown menu in the task form
  const taskProject = document.getElementById("task-form-project");
  taskProject.replaceChildren();

  //Append an empty(default) project to the task form dropdown menu
  const defaultProject = document.createElement("option");
  defaultProject.setAttribute("value", "");
  defaultProject.textContent = "";
  taskProject.appendChild(defaultProject);

  //Create dom element for each project
  //Attach event listeners
  //Append created elements to the container
  projects.forEach((project) => {
    const singleProject = document.createElement("div");
    singleProject.classList.add("single-project");
    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.setAttribute("id", project.id);
    projectName.textContent = project.name;
    projectName.addEventListener("click", (e) => {
      projectDisplayFunction(e.target.id);
    });
    const editProject = document.createElement("div");
    editProject.classList.add("edit-project");
    editProject.setAttribute("id", project.id);
    const editIcon = document.createElement("span");
    editIcon.classList.add("material-icons", "md-18");
    editIcon.setAttribute("id", project.id);
    editIcon.textContent = "edit_note";
    editProject.appendChild(editIcon);
    editProject.addEventListener("click", (e) => {
      toggleProjectForm(e.target.id);
    });
    const deleteProject = document.createElement("div");
    deleteProject.classList.add("delete-project");
    deleteProject.setAttribute("id", project.id);
    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("material-icons", "md-18");
    deleteIcon.setAttribute("id", project.id);
    deleteIcon.textContent = "delete";
    deleteProject.appendChild(deleteIcon);
    deleteProject.addEventListener("click", (e) => {
      deleteProjectFunction(e.target.id);
    });
    singleProject.appendChild(projectName);
    singleProject.appendChild(editProject);
    singleProject.appendChild(deleteProject);
    container.appendChild(singleProject);

    //Append dropdown menu elements in the task form
    const taskProjectChild = document.createElement("option");
    taskProjectChild.setAttribute("value", project.name);
    taskProjectChild.textContent = project.name;
    taskProject.appendChild(taskProjectChild);
  });
};

//Append tasks to the dom
const loadTasks = (tasks) => {
  //Clear previous content first
  const container = document.querySelector(".task-container");
  container.replaceChildren();
  //Create dom element for each task
  //Attach event listeners
  tasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.setAttribute("id", task.id);
    const priority = document.createElement("div");
    priority.classList.add(`priority-${task.priority}`);
    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.setAttribute("id", task.id);
    taskTitle.textContent = task.title;
    taskTitle.addEventListener("click", (e) => {
      showTaskDetails(e.target.id);
    });
    const editTask = document.createElement("div");
    editTask.classList.add("edit-task");
    editTask.setAttribute("id", task.id);
    const editIcon = document.createElement("span");
    editIcon.classList.add("material-icons", "md-18");
    editIcon.setAttribute("id", task.id);
    editIcon.textContent = "edit_note";
    editTask.appendChild(editIcon);
    editTask.addEventListener("click", (e) => {
      toggleTaskForm(e.target.id);
    });
    const deleteTask = document.createElement("div");
    deleteTask.classList.add("delete-task");
    deleteTask.setAttribute("id", task.id);
    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("material-icons", "md-18");
    deleteIcon.setAttribute("id", task.id);
    deleteIcon.textContent = "delete";
    deleteTask.appendChild(deleteIcon);
    deleteTask.addEventListener("click", (e) => {
      deleteTaskFunction(e.target.id);
    });
    taskCard.appendChild(priority);
    taskCard.appendChild(taskTitle);
    taskCard.appendChild(editTask);
    taskCard.appendChild(deleteTask);
    container.appendChild(taskCard);
  });
};

//Create edit task form - Unused for now...
const editTaskForm = (id) => {
  //Pre-fill the form with data from task.id, then allow edits.
  //Attach event listeners
};

//Create edit project form - Unused for now...
const editProjectForm = (id) => {
  //Pre-fill the form with data from project.id, then allow edits.
  //Attach event listeners
};

export { domElements, loadProjects, loadTasks, editTaskForm, editProjectForm };
