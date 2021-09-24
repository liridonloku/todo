import { loadProjects } from './dom';
import { displayAllTasks } from './events';
import { getProjects } from './projects';
import './style.css';

displayAllTasks();
loadProjects(getProjects());
