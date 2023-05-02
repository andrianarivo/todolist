import addTask from './modules/addTask.js';
import editTask from './modules/editTask.js';
import listOfTasks from './modules/listOfTasks.js';
import TaskStore from './modules/TaskStore.js';
import './style.scss';

const taskStore = new TaskStore();

listOfTasks(taskStore);

addTask(taskStore);

editTask(taskStore);
