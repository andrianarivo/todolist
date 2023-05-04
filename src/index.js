import addTask from './modules/addTask.js';
import completeTask from './modules/completeTask.js';
import editTask from './modules/editTask.js';
import listOfTasks from './modules/listOfTasks.js';
import removeCompleted from './modules/removeCompleted.js';
import removeTask from './modules/removeTask.js';
import TaskStore from './modules/TaskStore.js';
import './style.scss';

const taskStore = new TaskStore();

listOfTasks(taskStore);

// ADD TASK
document.addEventListener('keydown', (event) => {
  const { target } = event;
  if (target.id === 'add-new-task') {
    if (event.key === 'Enter') {
      addTask(taskStore, target.value);
      target.value = '';
    }
  }
});

document.addEventListener('click', (event) => {
  const { target } = event;

  // EDIT TASK
  if (target.classList.contains('task-item')) {
    editTask(taskStore, target);
  }
  if (target.classList.contains('task-title')) {
    const parent = target.parentNode.parentNode;
    editTask(taskStore, parent);
  }

  // REMOVE TASK
  if (target.classList.contains('delete-task')) {
    removeTask(taskStore, target.id);
  }

  // REMOVE COMPLETED TASKS
  if (target.id === 'clear-all-tasks') {
    removeCompleted(taskStore);
  }
});

// COMPLETE TASK
document.addEventListener('change', (event) => {
  const { target } = event;
  if (target.classList.contains('task-completed')) {
    completeTask(taskStore, target.id);
  }
});
