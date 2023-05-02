import { reloadTasks } from './modules/DOMLoader.js';
import listOfTasks from './modules/ListOfTasks.js';
import TaskStore from './modules/TaskStore.js';
import './style.scss';

const taskStore = new TaskStore();

listOfTasks(taskStore);

reloadTasks.addEventListener('click', () => {
  listOfTasks(taskStore);
});
