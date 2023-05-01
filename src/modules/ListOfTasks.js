import { listContainer } from './DOMLoader.js';

const listOfTasks = (taskStore) => {
  listContainer.innerHTML += taskStore.render();
};

export default listOfTasks;
