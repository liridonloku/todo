import {addTask, editTask, removeTask, markDone, getTasks} from './tasks.js';
import {addProject, removeProject, getProjects, editProject } from './projects.js';
import {defaultDisplay, todayDisplay, projectDisplay, weekDisplay} from './display.js';
import './style.css';

addTask('Task1', 'Desc', 'default', '2021-01-01', '1');
addTask('Task2', 'Desc', 'default', '2021-04-02', '1');
addTask('Task3', 'Desc', 'default', '2021-02-01', '1');
addTask('Task4', 'Desc', 'default2', '2021-01-03', '1');
addTask('Task5', 'Desc', 'default2', '2021-09-15', '1');