import { listContainer } from './DOMLoader';

const listOfTasks = (taskStore) => {
  listContainer.innerHTML += taskStore.render();
};

export default listOfTasks;
