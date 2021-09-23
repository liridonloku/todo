
//Menu toggle (mobile)
//Task form toggle (via new task or edit task)
const toggleNewTask = () => {
    const taskForm = document.querySelector('.task-form');
    if(taskForm.style.display === 'none' || taskForm.style.display === ''){
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
//Save/edit project form button
//Cancel project form button
//Delete form button
//All tasks
//Today
//This week
//Project display
//Task details

export {toggleNewTask}