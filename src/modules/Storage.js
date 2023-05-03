const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];

const saveTasks = (tasksArray) => {
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

export { getTasks, saveTasks };
