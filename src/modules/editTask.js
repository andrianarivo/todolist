import listOfTasks from './listOfTasks.js';

const updateTask = (index, input, taskStore) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      taskStore.editTask(Number(index), input.value);
      listOfTasks(taskStore);
    }
  });
};

const createTrashCan = (taskIndex) => {
  const a = document.createElement('a');
  a.href = '#';
  a.style.textDecoration = 'none';
  const i = document.createElement('i');
  i.className = 'delete-task fa-regular fa-trash-can';
  i.id = taskIndex;
  a.appendChild(i);
  return a;
};

const createInputEdit = (target) => {
  // INPUT EDIT TEXT
  const taskTitle = target.children[0].children[1].innerHTML;
  const input = document.createElement('input');
  input.style.border = 'none';
  input.style.outline = 'none';
  input.style.fontStyle = 'italic';
  input.style.backgroundColor = 'bisque';
  input.value = taskTitle;

  // LAYOUT CHANGE
  target.style.backgroundColor = 'bisque';
  target.children[0].children[1].remove();
  target.children[0].appendChild(input);
  target.children[1].remove();

  // TRASH CAN
  const deleteTask = createTrashCan(target.id);
  target.appendChild(deleteTask);

  input.focus();

  return input;
};

const editTask = (taskStore, target) => {
  const input = createInputEdit(target);
  updateTask(target.id, input, taskStore);
};

export default editTask;
