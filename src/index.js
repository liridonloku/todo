import {addTask, editTask, removeTask, getTasks} from './tasks.js';
import {addProject, removeProject, getProjects, editProject } from './projects.js';
import {defaultDisplay, todayDisplay, projectDisplay, weekDisplay} from './display.js';
import { loadProjects, loadTasks, editProjectForm, editTaskForm } from './dom.js';
import './style.css';

addProject('default');

addTask('Task1', 'Desc', 'default', '2021-01-01', 'high');
addTask('Task2', 'Desc', 'default', '2021-04-02', 'medium');
addTask('Task3', 'Desc', 'default', '2021-02-01', 'low');
addTask('Task4', 'Desc', 'default2', '2021-01-03', 'low');
addTask('Task5', 'Desc', 'default2', '2021-09-15', 'high');
