import { reloadTasks } from './modules/DOMLoader';
import listOfTasks from './modules/ListOfTasks';
import TaskStore from './modules/TaskStore';
import './style.scss';

const taskStore = new TaskStore();

listOfTasks(taskStore);

reloadTasks.addEventListener('click', () => {
  listOfTasks(taskStore);
});
