import listOfTasks from './listOfTasks.js';

const completeTask = (taskStore, taskIndex) => {
  taskStore.toggleTask(Number(taskIndex));
  listOfTasks(taskStore);
};

export default completeTask;
