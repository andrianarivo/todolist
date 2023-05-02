import listOfTasks from './listOfTasks.js';

const removeCompleted = (taskStore) => {
  taskStore.removeCompleted();
  listOfTasks(taskStore);
};

export default removeCompleted;
