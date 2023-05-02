import listOfTasks from './listOfTasks.js';
import Task from './Task.js';

const addTask = (taskStore) => {
  document.addEventListener('keydown', (event) => {
    const { target } = event;
    if (target.id === 'add-new-task') {
      if (event.key === 'Enter') {
        const newTask = new Task(taskStore.getNextIndex(), target.value, false);
        target.value = '';
        taskStore.addTask(newTask);
        listOfTasks(taskStore);
      }
    }
  });
};

export default addTask;
