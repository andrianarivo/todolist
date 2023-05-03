import listOfTasks from './listOfTasks.js';
import Task from './Task.js';

const addTask = (taskStore, description) => {
  const newTask = new Task(taskStore.getNextIndex(), description, false);
  taskStore.addTask(newTask);
  listOfTasks(taskStore);
};

export default addTask;
