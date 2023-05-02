import listOfTasks from './listOfTasks.js';

const createInput = (taskTitle) => {
  const input = document.createElement('input');
  input.style.border = 'none';
  input.style.outline = 'none';
  input.style.fontStyle = 'italic';
  input.style.backgroundColor = 'bisque';
  input.value = taskTitle;
  return input;
};

const updateTask = (index, input, taskStore) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      taskStore.editTask(Number(index), input.value);
      listOfTasks(taskStore);
    }
  });
};

const editTask = (taskStore) => {
  document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('task-item')) {
      const taskTitle = target.children[0].children[1].innerHTML;
      const input = createInput(taskTitle);

      target.style.backgroundColor = 'bisque';
      target.children[0].children[1].remove();
      target.children[0].appendChild(input);
      input.focus();

      updateTask(target.id, input, taskStore);
    } else if (target.classList.contains('task-title')) {
      const taskTitle = target.innerHTML;
      const input = createInput(taskTitle);
      const parent = target.parentNode.parentNode;

      parent.style.backgroundColor = 'bisque';
      parent.children[0].children[1].remove();
      parent.children[0].appendChild(input);
      input.focus();

      updateTask(target.id, input, taskStore);
    }
  });
};

export default editTask;
