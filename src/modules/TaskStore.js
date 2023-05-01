import Task from './Task';

export default class TaskStore {
  constructor() {
    this.tasksArray = [new Task('Task 1'), new Task('Task 2', true)];
  }

  // Show books in DOM
  render() {
    let content = '';
    this.tasksArray.forEach((task) => {
      content += `
    <li class="list-group-item d-flex justify-content-between align-items-baseline">
      <div class="d-flex gap-2 align-items-baseline">
        <input type="checkbox" class="form-check-input" ${task.completed ? 'checked' : ''}/>
        <p class="${task.completed ? 'text-decoration-line-through' : ''}">${task.description}</p>
      </div>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>`;
    });
    return content;
  }

  // Check if empty
  empty() {
    return this.tasksArray.length === 0;
  }
}
