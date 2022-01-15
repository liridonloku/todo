import {
  defaultDisplay,
  todayDisplay,
  weekDisplay,
  projectDisplay,
} from "./display";
import { domElements, loadProjects, loadTasks } from "./dom";
import {
  addProject,
  editProject,
  getProjects,
  removeProject,
} from "./projects";
import { addTask, editTask, getTasks, removeTask } from "./tasks";

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
});

//Menu toggle (mobile)
const toggleMenu = () => {
  domElements.sidePanel.classList.toggle("visible");
};

//Theme toggle
const toggleTheme = () => {
  if (domElements.themeToggle.textContent === "dark_mode") {
    domElements.themeToggle.textContent = "light_mode";
    document.documentElement.style.setProperty("--background", "#2a272a");
    document.documentElement.style.setProperty("--font-primary", "#f7f0f0");
    document.documentElement.style.setProperty("--shadow", "#0b0a0b");
    document.documentElement.style.setProperty("--after", "#0b0a0b");
  } else {
    domElements.themeToggle.textContent = "dark_mode";
    document.documentElement.style.setProperty("--background", "#f2f5f7");
    document.documentElement.style.setProperty("--font-primary", "#2b303a");
    document.documentElement.style.setProperty("--shadow", "#7c7c7c");
    document.documentElement.style.setProperty("--after", "#d8d4d8");
  }
};

//Task form toggle (via new task or edit task)
const toggleTaskForm = (id) => {
  if (
    window.innerWidth <= 420 &&
    domElements.sidePanel.classList.contains("visible")
  ) {
    toggleMenu();
  }
  const taskForm = document.querySelector(".task-form");
  if (!domElements.formOverlay.classList.contains("visible")) {
    //Edit task
    if (id != "") {
      let tasks = getTasks();
      let index = tasks.findIndex((e) => e.id === id);
      if (index >= 0) {
        domElements.taskTitle.value = tasks[index].title;
        domElements.taskDescription.value = tasks[index].description;
        domElements.taskPriority.value = tasks[index].priority;
        domElements.taskDate.value = tasks[index].date;
        domElements.taskProject.value = tasks[index].project;
        domElements.saveTask.setAttribute("id", tasks[index].id);
      }
    }
    //New task
    else {
      domElements.taskTitle.value = "";
      domElements.taskDescription.value = "";
      domElements.taskPriority.value = "medium";
      domElements.taskDate.value = new Date().toISOString().slice(0, 10);
      domElements.taskProject.value = "";
      domElements.saveTask.setAttribute("id", "");
    }
    domElements.formOverlay.classList.toggle("visible");
    taskForm.classList.toggle("visible");
  } else {
    domElements.formOverlay.classList.toggle("visible");
    taskForm.classList.toggle("visible");
  }
};
//Save/edit task form button
const saveTask = () => {
  const id = domElements.saveTask.getAttribute("id");
  //If task exists: edit it.
  if (id != "") {
    editTask(
      id,
      domElements.taskTitle.value,
      domElements.taskDescription.value,
      domElements.taskProject.value,
      domElements.taskDate.value,
      domElements.taskPriority.value
    );
  }
  //new task
  else {
    addTask(
      domElements.taskTitle.value,
      domElements.taskDescription.value,
      domElements.taskProject.value,
      domElements.taskDate.value,
      domElements.taskPriority.value
    );
  }
  toggleTaskForm("");
  loadLastView();
};
//Cancel task form button
const cancelTaskForm = (id) => {
  toggleTaskForm(id);
};
//Delete task button
const deleteTask = (id) => {
  document.getElementById(id).classList.add("delete");
  removeTask(id);
  setTimeout(() => {
    loadLastView();
  }, 200);
};
//Project form toggle (via new project or edit project)
const toggleProjectForm = (id) => {
  if (
    window.innerWidth <= 420 &&
    domElements.sidePanel.classList.contains("visible")
  ) {
    toggleMenu();
  }
  const projectForm = document.querySelector(".project-form");
  if (!domElements.formOverlay.classList.contains("visible")) {
    //Edit project
    if (id != "") {
      let projects = getProjects();
      let index = projects.findIndex((e) => e.id === id);
      if (index >= 0) {
        domElements.projectName.value = projects[index].name;
        domElements.saveProject.setAttribute("id", projects[index].id);
      }
    }
    //New project
    else {
      domElements.projectName.value = "";
      domElements.saveProject.setAttribute("id", "");
    }
    projectForm.classList.toggle("visible");
    domElements.formOverlay.classList.toggle("visible");
  } else {
    projectForm.classList.toggle("visible");
    domElements.formOverlay.classList.toggle("visible");
  }
};
//Save/edit project form button
const saveProject = () => {
  const id = domElements.saveProject.getAttribute("id");
  if (id != "") {
    editProject(id, domElements.projectName.value);
  } else {
    addProject(domElements.projectName.value);
  }
  toggleProjectForm("");
  loadProjects(getProjects());
};
//Cancel project form button
const cancelProjectForm = (id) => {
  toggleProjectForm(id);
};
//Delete project button
const deleteProject = (id) => {
  let confirmation = confirm(
    `Are you sure you want to delete this project. This will delete its tasks too.`
  );
  if (confirmation) {
    removeProject(id);
    loadProjects(getProjects());
    loadLastView();
  }
};

let lastView = "All tasks";
//All tasks
const displayAllTasks = () => {
  if (
    window.innerWidth <= 420 &&
    domElements.sidePanel.classList.contains("visible")
  ) {
    toggleMenu();
  }
  lastView = "All tasks";
  domElements.domTasksTitle.textContent = "All tasks:";
  loadTasks(defaultDisplay());
};
//Today
const displayToday = () => {
  if (
    window.innerWidth <= 420 &&
    domElements.sidePanel.classList.contains("visible")
  ) {
    toggleMenu();
  }
  lastView = "Today";
  domElements.domTasksTitle.textContent = `Today's tasks:`;
  loadTasks(todayDisplay());
};
//This week
const displayThisWeek = () => {
  if (
    window.innerWidth <= 420 &&
    domElements.sidePanel.classList.contains("visible")
  ) {
    toggleMenu();
  }
  lastView = "This week";
  domElements.domTasksTitle.textContent = `This week's tasks:`;
  loadTasks(weekDisplay());
};
//Project display
const projectDisplayFunction = (id) => {
  if (
    window.innerWidth <= 420 &&
    domElements.sidePanel.classList.contains("visible")
  ) {
    toggleMenu();
  }
  let projects = getProjects();
  let index = projects.findIndex((e) => e.id === id);
  let projectName = projects[index].name;
  domElements.domTasksTitle.textContent = `Project: ${projectName}`;
  loadTasks(projectDisplay(projectName));
};
//Task details
const showTaskDetails = (id) => {
  if (
    window.innerWidth <= 420 &&
    domElements.sidePanel.classList.contains("visible")
  ) {
    toggleMenu();
  }
  let tasks = getTasks();
  let index = tasks.findIndex((e) => e.id === id);
  let task = tasks[index];
  domElements.taskDetailsTitle.textContent = task.title;
  domElements.taskDetailsDescription.textContent = task.description;
  domElements.taskDetailsPriority.textContent = `Priority: ${task.priority}`;
  domElements.taskDetailsDate.textContent = `Due date: ${task.date}`;
  domElements.taskDetailsProject.textContent = `Project: ${task.project}`;
  domElements.taskDetailsOkButton.addEventListener("click", () => {
    domElements.taskDetails.classList.remove("visible");
    domElements.formOverlay.classList.remove("visible");
  });
  domElements.taskDetails.classList.toggle("visible");
  domElements.formOverlay.classList.toggle("visible");
};

const loadLastView = () => {
  switch (lastView) {
    case "All tasks":
      displayAllTasks();
      break;
    case "Today":
      displayToday();
      break;
    case "This week":
      displayThisWeek();
      break;
    default:
      break;
  }
};

export {
  toggleMenu,
  toggleTheme,
  toggleTaskForm,
  toggleProjectForm,
  cancelTaskForm,
  cancelProjectForm,
  displayAllTasks,
  displayToday,
  displayThisWeek,
  saveTask,
  deleteTask,
  saveProject,
  deleteProject,
  projectDisplayFunction,
  showTaskDetails,
};
