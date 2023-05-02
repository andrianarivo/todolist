import listOfTasks from './listOfTasks.js';

const removeTask = (taskStore, taskIndex) => {
  taskStore.removeTask(taskIndex);
  listOfTasks(taskStore);
};

export default removeTask;
