import { listContainer, reloadTasksLink } from './modules/DOMLoader';
import TaskStore from './modules/TaskStore';
import './style.scss';

const taskStore = new TaskStore();


listContainer.innerHTML += taskStore.render();

reloadTasksLink.addEventListener('click', () => {

});