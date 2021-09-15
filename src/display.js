import { getProjects } from "./projects";
import { getTasks } from "./tasks";
import { compareAsc, compareDesc, format, newDate, parseISO, parse } from "date-fns";

//Default display: All tasks sorted by due date.
const defaultDisplay = () => {
    return sortTasks(getTasks());
}

//Project display: Tasks from one project by due date.
const projectDisplay = (project) => {
    let tasks = sortTasks(getTasks());
    let sortedTasks = [];
    tasks.forEach(task => {
        if(task.project === project){
            sortedTasks.push(task);
        }
    });
    return sortedTasks;
}

//Today: All tasks for today
const todayDisplay = () => {

}

//Week: All tasks for this week
const weekDisplay = () => {

}

//Sort tasks by date - helper function
const sortTasks = (tasks) => {
    let sortedTasks = [];
    let dates = [];
    tasks.forEach(task => {
        dates.push(parseISO(task.date));
    });
    dates = dates.sort(compareAsc);
    dates.forEach(date => {
        const index = tasks.findIndex(item => item.date === format(date, 'yyyy-MM-dd'));
        sortedTasks.push(tasks[index]);
        tasks.splice(index,1);
    });
    return sortedTasks;
}

export {defaultDisplay, projectDisplay, todayDisplay, weekDisplay};