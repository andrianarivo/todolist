import Task from './Task.js';

export default class TaskStore {
  constructor() {
    this.tasksArray = [new Task(1, 'Task 1'), new Task(2, 'Task 2', true)];
  }

  // Show books in DOM
  render() {
    let content = '';
    this.tasksArray.forEach((task) => {
      content += `
      <li class="list-group-item d-flex justify-content-between align-items-baseline">
        <div class="task-item d-flex gap-2 align-items-baseline">
          <input type="checkbox" class="task-completed form-check-input" ${task.completed ? 'checked' : ''}/>
          <p class="${task.completed ? 'text-decoration-line-through' : ''}">${task.description}</p>
        </div>
        <a class="move-task" href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
      </li>`;
    });
    return content;
  }

  // Check if empty
  empty() {
    return this.tasksArray.length === 0;
  }
}
